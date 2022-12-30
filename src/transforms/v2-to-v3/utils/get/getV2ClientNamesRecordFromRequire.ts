import { Collection, Identifier, JSCodeshift, ObjectPattern, Property } from "jscodeshift";

import { CLIENT_NAMES, PACKAGE_NAME } from "../config";
import { getV2ServiceModulePath } from "./getV2ServiceModulePath";

const getRequireIds = (j: JSCodeshift, source: Collection<unknown>, sourceValue: string) =>
  source
    .find(j.VariableDeclarator, {
      init: {
        type: "CallExpression",
        callee: { type: "Identifier", name: "require" },
        arguments: [{ value: sourceValue }],
      },
    })
    .nodes()
    .map((variableDeclarator) => variableDeclarator.id);

export const getV2ClientNamesRecordFromRequire = (
  j: JSCodeshift,
  source: Collection<unknown>,
  v2ClientNamesWithServiceModule: string[]
) => {
  const v2ClientNamesRecord: Record<string, string> = {};

  const idPropertiesFromNamedImport = getRequireIds(j, source, PACKAGE_NAME)
    .filter((id) => id.type === "ObjectPattern")
    .map((objectPattern) => (objectPattern as ObjectPattern).properties)
    .flat() as Property[];

  for (const idProperty of idPropertiesFromNamedImport) {
    if (idProperty.type !== "Property") {
      continue;
    }
    const key = idProperty.key as Identifier;
    if (key.type !== "Identifier") {
      continue;
    }
    const value = idProperty.value as Identifier;
    if (value.type !== "Identifier") {
      continue;
    }
    if (CLIENT_NAMES.includes(key.name)) {
      v2ClientNamesRecord[key.name] = value.name;
    }
  }

  for (const clientName of v2ClientNamesWithServiceModule) {
    const deepRequirePath = getV2ServiceModulePath(clientName);
    const idsFromDefaultImport = getRequireIds(j, source, deepRequirePath).filter(
      (id) => id.type === "Identifier"
    );
    if (idsFromDefaultImport.length) {
      v2ClientNamesRecord[clientName] = (idsFromDefaultImport[0] as Identifier).name;
    }
  }

  return v2ClientNamesRecord;
};

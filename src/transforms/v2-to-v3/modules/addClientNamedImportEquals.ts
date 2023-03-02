import { Collection, JSCodeshift } from "jscodeshift";

import { getDefaultLocalName } from "../utils";
import { addClientDefaultImportEquals } from "./addClientDefaultImportEquals";
import { getImportEqualsDeclaration } from "./getImportEqualsDeclaration";
import { getImportEqualsLocalNameSuffix } from "./getImportEqualsLocalNameSuffix";
import { getRequireProperty } from "./getRequireProperty";
import { objectPatternPropertyCompareFn } from "./objectPatternPropertyCompareFn";
import { ClientModulesOptions, RequirePropertyOptions } from "./types";

export const addClientNamedImportEquals = (
  j: JSCodeshift,
  source: Collection<unknown>,
  options: ClientModulesOptions & RequirePropertyOptions
) => {
  const { keyName, valueName, ...v3ClientModulesOptions } = options;
  const { v2ClientName, v3ClientPackageName } = v3ClientModulesOptions;

  const localNameSuffix = getImportEqualsLocalNameSuffix(v2ClientName, v3ClientPackageName);
  const v3ClientDefaultLocalName = getDefaultLocalName(localNameSuffix);
  const namedImportObjectProperty = getRequireProperty(j, { keyName, valueName });

  const existingVarDeclarator = source.find(j.VariableDeclarator, {
    type: "VariableDeclarator",
    init: { type: "Identifier", name: v3ClientDefaultLocalName },
  });

  if (existingVarDeclarator.size()) {
    const firstDeclaratorProperties = existingVarDeclarator.get(0).node.id.properties;
    firstDeclaratorProperties.push(namedImportObjectProperty);
    firstDeclaratorProperties.sort(objectPatternPropertyCompareFn);
    return;
  }

  const importEqualsDeclaration = getImportEqualsDeclaration(v3ClientPackageName);
  if (source.find(j.TSImportEqualsDeclaration, importEqualsDeclaration).size() === 0) {
    addClientDefaultImportEquals(j, source, v3ClientModulesOptions);
  }

  const varDeclaration = j.variableDeclaration("const", [
    j.variableDeclarator(
      j.objectPattern([namedImportObjectProperty]),
      j.identifier(v3ClientDefaultLocalName)
    ),
  ]);

  const v3ClientImportEquals = source
    .find(j.TSImportEqualsDeclaration, importEqualsDeclaration)
    .filter(
      (importEqualsDeclaration) =>
        importEqualsDeclaration.value.id.name === v3ClientDefaultLocalName
    );

  if (v3ClientImportEquals.size() > 0) {
    v3ClientImportEquals.at(0).insertAfter(varDeclaration);
    return;
  }

  // Unreachable code, throw error
  throw new Error(
    "The named import equals can't exist on it's own.\n" +
      "Please report your use case on https://github.com/awslabs/aws-sdk-js-codemod"
  );
};

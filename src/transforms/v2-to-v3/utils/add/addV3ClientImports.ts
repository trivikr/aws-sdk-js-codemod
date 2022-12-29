import { Collection, JSCodeshift } from "jscodeshift";

import { PACKAGE_NAME } from "../config";
import { getV2ServiceModulePath } from "../get";
import { addV3ClientModuleImport } from "./addV3ClientModuleImport";
import { AddV3ClientModulesOptions } from "./addV3ClientModules";

export const addV3ClientImports = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2ClientName, v2ClientLocalName, v3ClientPackageName }: AddV3ClientModulesOptions
): void => {
  const existingImports = source.find(j.ImportDeclaration, {
    source: { value: v3ClientPackageName },
  });

  // Import declaration already exists.
  if (existingImports.size()) {
    addV3ClientModuleImport(j, existingImports, v2ClientLocalName);
  } else {
    // Insert after global import or service import, whichever comes first.
    source
      .find(j.ImportDeclaration)
      .filter((path) =>
        [PACKAGE_NAME, getV2ServiceModulePath(v2ClientName)].includes(
          path.value.source.value as string
        )
      )
      .at(0)
      .insertAfter(
        j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier(v2ClientLocalName))],
          j.stringLiteral(v3ClientPackageName)
        )
      );
  }
};

import { Collection, ImportDefaultSpecifier, JSCodeshift } from "jscodeshift";

import { getDefaultLocalName } from "../utils";
import { getImportSpecifiers } from "./getImportSpecifiers";
import { getV2ImportDeclaration } from "./getV2ImportDeclaration";
import { ClientModulesOptions } from "./types";

export const addClientDefaultImport = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2ClientLocalName, v2ClientName, v3ClientPackageName }: ClientModulesOptions
) => {
  const localName = getDefaultLocalName(v2ClientLocalName);
  const defaultImportSpecifier = j.importDefaultSpecifier(j.identifier(localName));

  const importDeclarations = source.find(j.ImportDeclaration, {
    source: { value: v3ClientPackageName },
  });

  const importDefaultSpecifiers = getImportSpecifiers(j, source, v3ClientPackageName).filter(
    (importSpecifier) => importSpecifier?.type === "ImportDefaultSpecifier"
  ) as ImportDefaultSpecifier[];

  if (importDeclarations.length) {
    if (!importDefaultSpecifiers.find((specifier) => specifier?.local?.name === localName)) {
      importDeclarations.nodes()[0].specifiers?.push(defaultImportSpecifier);
      return;
    }
  }

  // Insert after global import, or service import.
  const v2ImportDeclaration = getV2ImportDeclaration(j, source, {
    v2ClientName,
    v2ClientLocalName,
  });

  const v3ImportDeclaration = j.importDeclaration(
    [defaultImportSpecifier],
    j.stringLiteral(v3ClientPackageName)
  );

  if (v2ImportDeclaration && v2ImportDeclaration.nodes().length > 0) {
    v2ImportDeclaration.at(0).insertAfter(v3ImportDeclaration);
  } else {
    // Unreachable code, throw error
    throw new Error(
      "Base Import Declaration not found to insert new Import Declaration.\n" +
        "Please report your use case on https://github.com/awslabs/aws-sdk-js-codemod"
    );
  }
};

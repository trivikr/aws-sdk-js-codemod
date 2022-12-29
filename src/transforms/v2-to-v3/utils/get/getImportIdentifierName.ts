import { Collection, Identifier, JSCodeshift } from "jscodeshift";

import { getV2ServiceModulePath } from "./getV2ServiceModulePath";

export const getImportIdentifierName = (
  j: JSCodeshift,
  source: Collection<unknown>,
  clientName: string
): string | undefined => {
  const sourceValue = getV2ServiceModulePath(clientName);
  const importSpecifiers = source
    .find(j.ImportDeclaration, {
      type: "ImportDeclaration",
      source: { value: sourceValue },
    })
    .nodes()
    .map((importDeclaration) => importDeclaration.specifiers)
    .flat()
    .filter((specifier) =>
      ["ImportDefaultSpecifier", "ImportNamespaceSpecifier"].includes(specifier?.type as string)
    );

  if (importSpecifiers.length > 0) {
    return (importSpecifiers[0]?.local as Identifier).name;
  }
  return undefined;
};

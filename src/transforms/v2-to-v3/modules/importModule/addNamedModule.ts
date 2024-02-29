import { Collection, JSCodeshift } from "jscodeshift";

import { PACKAGE_NAME } from "../../config";
import { getImportSpecifiers } from "../importModule";
import { importSpecifierCompareFn } from "../importSpecifierCompareFn";
import { ImportSpecifierPattern, ModulesOptions } from "../types";

export const addNamedModule = (
  j: JSCodeshift,
  source: Collection<unknown>,
  options: ModulesOptions
) => {
  const { importedName, localName = importedName, packageName } = options;

  const importDeclarations = source.find(j.ImportDeclaration, {
    source: { value: packageName },
  });

  if (importDeclarations.size()) {
    const importSpecifiers = getImportSpecifiers(j, source, packageName);

    const importSpecifierPatterns = importSpecifiers.filter(
      (importSpecifier) => typeof importSpecifier === "object"
    ) as ImportSpecifierPattern[];

    // Return if the import specifier already exists.
    if (
      importSpecifierPatterns.find(
        (specifier) => specifier.importedName === importedName && specifier.localName === localName
      )
    ) {
      return;
    }

    // Add named import to the first import declaration.
    const firstImportDeclSpecifiers = importDeclarations.nodes()[0].specifiers;
    if (firstImportDeclSpecifiers) {
      firstImportDeclSpecifiers.push(
        j.importSpecifier(j.identifier(importedName), j.identifier(localName))
      );
      firstImportDeclSpecifiers.sort(importSpecifierCompareFn);
      return;
    }
  }

  // Build a new import declaration.
  const v3ImportDeclaration = j.importDeclaration(
    [j.importSpecifier(j.identifier(importedName), j.identifier(localName))],
    j.stringLiteral(packageName)
  );

  const v2importDeclarations = source.find(j.ImportDeclaration).filter((path) => {
    const { value } = path.node.source;
    return typeof value === "string" && value.startsWith(PACKAGE_NAME);
  });

  if (v2importDeclarations.size()) {
    // Insert it after the last import declaration.
    v2importDeclarations.at(0).insertAfter(v3ImportDeclaration);
    return;
  }

  // Insert it at the top of the document.
  source.get().node.program.body.unshift(v3ImportDeclaration);
};

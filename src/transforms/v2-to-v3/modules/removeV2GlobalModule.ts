import { Collection, JSCodeshift } from "jscodeshift";

import { PACKAGE_NAME } from "../config";
import { hasImportEquals } from "./hasImportEquals";
import { hasRequire } from "./hasRequire";
import { removeImportDefault } from "./removeImportDefault";
import { removeImportEqualsIdentifierName } from "./removeImportEqualsIdentifierName";
import { removeRequireIdentifier } from "./removeRequireIdentifier";

export const removeV2GlobalModule = (
  j: JSCodeshift,
  source: Collection<unknown>,
  v2GlobalName: string
) => {
  const identifierUsages = source.find(j.Identifier, { name: v2GlobalName });

  // Only usage is import/require.
  if (identifierUsages.size() === 1) {
    const removeIdentifierNameOptions = {
      localName: v2GlobalName,
      sourceValue: PACKAGE_NAME,
    };
    if (hasRequire(j, source)) {
      removeRequireIdentifier(j, source, removeIdentifierNameOptions);
    } else if (hasImportEquals(j, source)) {
      removeImportEqualsIdentifierName(j, source, removeIdentifierNameOptions);
    } else {
      removeImportDefault(j, source, removeIdentifierNameOptions);
    }
  }
};

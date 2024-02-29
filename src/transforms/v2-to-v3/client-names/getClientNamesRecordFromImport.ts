import { Collection, JSCodeshift } from "jscodeshift";

import { CLIENT_NAMES, PACKAGE_NAME } from "../config";
import { getImportSpecifiers as getImportEqualsSpecifiers } from "../modules/importEqualsModule";
import { getImportSpecifiers } from "../modules/importModule";
import { getClientDeepImportPath } from "../utils";

export const getClientNamesRecordFromImport = (
  j: JSCodeshift,
  source: Collection<unknown>,
  clientNamesFromDeepImport: string[]
) => {
  const clientNamesRecord: Record<string, string> = {};

  const specifiersFromNamedImport = getImportSpecifiers(j, source, PACKAGE_NAME).filter(
    (importSpecifier) => importSpecifier.importedName
  );

  for (const { importedName, localName } of specifiersFromNamedImport) {
    const clientName = importedName ?? localName;
    if (CLIENT_NAMES.includes(clientName)) {
      clientNamesRecord[clientName] = localName;
    }
  }

  for (const clientName of clientNamesFromDeepImport) {
    const deepImportPath = getClientDeepImportPath(clientName);

    const specifiersFromDeepImport = getImportSpecifiers(j, source, deepImportPath).filter(
      (importSpecifier) => !importSpecifier.importedName
    );
    if (specifiersFromDeepImport.length > 0) {
      clientNamesRecord[clientName] = specifiersFromDeepImport[0].localName;
    }

    const identifiersFromImportEquals = getImportEqualsSpecifiers(j, source, deepImportPath);
    if (identifiersFromImportEquals.length > 0) {
      clientNamesRecord[clientName] = identifiersFromImportEquals[0].localName;
    }
  }

  return clientNamesRecord;
};

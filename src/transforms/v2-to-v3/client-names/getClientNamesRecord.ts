import { Collection, JSCodeshift } from "jscodeshift";

import { ImportType } from "../modules";
import { getClientNamesFromDeepImport } from "./getClientNamesFromDeepImport";
import { getClientNamesRecordFromImport } from "./getClientNamesRecordFromImport";
import { getClientNamesRecordFromRequire } from "./getClientNamesRecordFromRequire";

export const getClientNamesRecord = (
  j: JSCodeshift,
  source: Collection<unknown>,
  importType: ImportType
) => {
  const clientNamesFromDeepImport = getClientNamesFromDeepImport(source.toSource());

  const clientNamesRecord =
    importType === ImportType.REQUIRE
      ? getClientNamesRecordFromRequire(j, source, clientNamesFromDeepImport)
      : getClientNamesRecordFromImport(j, source, clientNamesFromDeepImport);

  // Populate client names for type transformations
  // Ref: https://github.com/aws/aws-sdk-js-codemod/issues/663
  for (const clientName of clientNamesFromDeepImport) {
    if (!(clientName in clientNamesRecord)) {
      clientNamesRecord[clientName] = clientName;
    }
  }

  return clientNamesRecord;
};

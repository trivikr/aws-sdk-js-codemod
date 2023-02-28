import { CLIENTS_TO_TEST } from "./config";
import { getClientNamesSortedByPackageName } from "./getClientNamesSortedByPackageName";
import { getV3ClientsNewExpressionCode } from "./getV3ClientsNewExpressionCode";
import { getV3PackageImportsCode } from "./getV3PackageImportsCode";

export const getGlobalImportStarOutput = (codegenComment: string) => {
  let content = `${codegenComment}\n`;

  content += getV3PackageImportsCode(
    getClientNamesSortedByPackageName(CLIENTS_TO_TEST).map((clientName) => [clientName, clientName])
  );
  content += `\n`;
  content += getV3ClientsNewExpressionCode(CLIENTS_TO_TEST);

  return content;
};

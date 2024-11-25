import { CLIENTS_TO_TEST } from "./config.ts";
import { getClientNamesSortedByPackageName } from "./getClientNamesSortedByPackageName.ts";
import { getV3ClientsNewExpressionCode } from "./getV3ClientsNewExpressionCode.ts";
import { getV3PackageRequiresCode } from "./getV3PackageRequiresCode.ts";

export const getGlobalRequireOutput = () => {
  let content = "\n\n";

  content += getV3PackageRequiresCode(getClientNamesSortedByPackageName(CLIENTS_TO_TEST));
  content += "\n";
  content += getV3ClientsNewExpressionCode(CLIENTS_TO_TEST);

  return content;
};

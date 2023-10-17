import { CLIENT_NAMES_MAP } from "../../src/transforms/v2-to-v3/config";
import { getDefaultLocalName } from "../../src/transforms/v2-to-v3/utils";
import { CLIENTS_TO_TEST } from "./config";
import { getV3ClientsNewExpressionCode } from "./getV3ClientsNewExpressionCode";
import { getV3PackageImportEqualsCode } from "./getV3PackageImportEqualsCode";

export const getServiceImportEqualsOutput = () => {
  let content = ``;

  content += getV3PackageImportEqualsCode(CLIENTS_TO_TEST);
  content += "\n";
  content += getV3ClientsNewExpressionCode(
    CLIENTS_TO_TEST.map((clientName) =>
      [getDefaultLocalName(clientName), CLIENT_NAMES_MAP[clientName]].join(".")
    )
  );

  return content;
};

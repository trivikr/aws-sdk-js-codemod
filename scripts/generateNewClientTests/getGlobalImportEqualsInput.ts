import { CLIENTS_TO_TEST } from "./config.ts";
import { getV2ClientsNewExpressionCode } from "./getV2ClientsNewExpressionCode.ts";

export const getGlobalImportEqualsInput = () => {
  let content = "";

  content += `import AWS = require("aws-sdk");\n\n`;
  content += getV2ClientsNewExpressionCode(CLIENTS_TO_TEST, "AWS.");

  return content;
};

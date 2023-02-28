import { CLIENTS_TO_TEST, LOCAL_NAME_SUFFIX } from "./config";
import { getV2ClientsNewExpressionCode } from "./getV2ClientsNewExpressionCode";

export const getServiceImportDeepStarWithNameInput = (codegenComment: string) => {
  let content = `${codegenComment}\n`;

  for (const clientName of CLIENTS_TO_TEST) {
    content += `import * as ${clientName}${LOCAL_NAME_SUFFIX} from "aws-sdk/clients/${clientName.toLowerCase()}";\n`;
  }
  content += `\n`;
  content += getV2ClientsNewExpressionCode(
    CLIENTS_TO_TEST.map((clientName) => `${clientName}${LOCAL_NAME_SUFFIX}`)
  );

  return content;
};

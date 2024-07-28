import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  CLIENT_NAMES,
  DOCUMENT_CLIENT,
  DYNAMODB,
  DYNAMODB_DOCUMENT_CLIENT,
} from "../../src/transforms/v2-to-v3/config";
import { getClientReqRespTypesMap } from "./getClientReqRespTypesMap";
import { getClientTypesMap } from "./getClientTypesMap";

const codegenComment = `// This file is generated by scripts/generateClientTypesMap/index.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.`;

(async () => {
  for (const [mapName, getTypesMap] of [
    ["CLIENT_TYPES_MAP", getClientTypesMap],
    ["CLIENT_REQ_RESP_TYPES_MAP", getClientReqRespTypesMap],
  ] as [string, (clientName: string) => Promise<Record<string, string>>][]) {
    const filePath = join("src", "transforms", "v2-to-v3", "config", `${mapName}.ts`);
    const relativeFilePath = join(__dirname, "..", "..", filePath);

    let fileContent = codegenComment;

    fileContent += "\n\n\n";
    fileContent += `export const ${mapName}: Record<string, Record<string, string>> = `;

    const clientTypesMap = {};

    for (const clientName of CLIENT_NAMES) {
      clientTypesMap[clientName] = await getTypesMap(clientName);
      if (clientName === DYNAMODB) {
        clientTypesMap[DYNAMODB_DOCUMENT_CLIENT] = await getTypesMap(DOCUMENT_CLIENT);
      }
    }

    fileContent += JSON.stringify(clientTypesMap);
    fileContent += ";\n";

    await writeFile(relativeFilePath, fileContent);
  }
})();

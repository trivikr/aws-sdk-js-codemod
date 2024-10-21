// This script generates tests in src/transforms/v2-to-v3/__fixtures__/new-client
// Run them using: npx tsx scripts/generateNewClientTests/index.ts
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import { getGlobalImportEqualsInput } from "./getGlobalImportEqualsInput";
import { getGlobalImportEqualsOutput } from "./getGlobalImportEqualsOutput";
import { getGlobalImportInput } from "./getGlobalImportInput";
import { getGlobalImportOutput } from "./getGlobalImportOutput";
import { getGlobalImportStarInput } from "./getGlobalImportStarInput";
import { getGlobalImportStarOutput } from "./getGlobalImportStarOutput";
import { getGlobalRequireInput } from "./getGlobalRequireInput";
import { getGlobalRequireOutput } from "./getGlobalRequireOutput";
import { getGlobalRequirePropertyInput } from "./getGlobalRequirePropertyInput";
import { getGlobalRequirePropertyOutput } from "./getGlobalRequirePropertyOutput";
import { getGlobalRequirePropertyWithNameInput } from "./getGlobalRequirePropertyWithNameInput";
import { getGlobalRequirePropertyWithNameOutput } from "./getGlobalRequirePropertyWithNameOutput";
import { getServiceImportDeepAllInput } from "./getServiceImportDeepAllInput";
import { getServiceImportDeepInput } from "./getServiceImportDeepInput";
import { getServiceImportDeepOutput } from "./getServiceImportDeepOutput";
import { getServiceImportDeepStarInput } from "./getServiceImportDeepStarInput";
import { getServiceImportDeepStarOutput } from "./getServiceImportDeepStarOutput";
import { getServiceImportDeepStarWithNameInput } from "./getServiceImportDeepStarWithNameInput";
import { getServiceImportDeepStarWithNameOutput } from "./getServiceImportDeepStarWithNameOutput";
import { getServiceImportDeepWithNameInput } from "./getServiceImportDeepWithNameInput";
import { getServiceImportDeepWithNameOutput } from "./getServiceImportDeepWithNameOutput";
import { getServiceImportEqualsInput } from "./getServiceImportEqualsInput";
import { getServiceImportEqualsOutput } from "./getServiceImportEqualsOutput";
import { getServiceImportEqualsWithNameInput } from "./getServiceImportEqualsWithNameInput";
import { getServiceImportEqualsWithNameOutput } from "./getServiceImportEqualsWithNameOutput";
import { getServiceImportInput } from "./getServiceImportInput";
import { getServiceImportOutput } from "./getServiceImportOutput";
import { getServiceImportWithNameInput } from "./getServiceImportWithNameInput";
import { getServiceImportWithNameOutput } from "./getServiceImportWithNameOutput";
import { getServiceRequireDeepAllInput } from "./getServiceRequireDeepAllInput";
import { getServiceRequireDeepInput } from "./getServiceRequireDeepInput";
import { getServiceRequireDeepOutput } from "./getServiceRequireDeepOutput";
import { getServiceRequireDeepWithNameInput } from "./getServiceRequireDeepWithNameInput";
import { getServiceRequireDeepWithNameOutput } from "./getServiceRequireDeepWithNameOutput";
import { getServiceRequireInput } from "./getServiceRequireInput";
import { getServiceRequireOutput } from "./getServiceRequireOutput";
import { getServiceRequireWithNameInput } from "./getServiceRequireWithNameInput";
import { getServiceRequireWithNameOutput } from "./getServiceRequireWithNameOutput";

const codegenComment = `// This file is generated by scripts/generateNewClientTests/index.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.`;

const newClientsTestsFolder = join("src", "transforms", "v2-to-v3", "__fixtures__", "new-client");
const newClientTestsPath = join(__dirname, "..", "..", newClientsTestsFolder);

(async () => {
  for (const [fileName, getFileContent] of [
    ["global-import.input.js", getGlobalImportInput],
    ["global-import.output.js", getGlobalImportOutput],
    ["global-import-equals.input.ts", getGlobalImportEqualsInput],
    ["global-import-equals.output.ts", getGlobalImportEqualsOutput],
    ["global-import-star.input.js", getGlobalImportStarInput],
    ["global-import-star.output.js", getGlobalImportStarOutput],
    ["global-require.input.js", getGlobalRequireInput],
    ["global-require.output.js", getGlobalRequireOutput],
    ["global-require-property.input.js", getGlobalRequirePropertyInput],
    ["global-require-property.output.js", getGlobalRequirePropertyOutput],
    ["global-require-property-with-name.input.js", getGlobalRequirePropertyWithNameInput],
    ["global-require-property-with-name.output.js", getGlobalRequirePropertyWithNameOutput],
    ["service-import.input.js", getServiceImportInput],
    ["service-import.output.js", getServiceImportOutput],
    ["service-import-equals.input.ts", getServiceImportEqualsInput],
    ["service-import-equals.output.ts", getServiceImportEqualsOutput],
    ["service-import-equals-with-name.input.ts", getServiceImportEqualsWithNameInput],
    ["service-import-equals-with-name.output.ts", getServiceImportEqualsWithNameOutput],
    ["service-import-deep.input.js", getServiceImportDeepInput],
    ["service-import-deep.output.js", getServiceImportDeepOutput],
    ["service-import-deep-all.input.js", getServiceImportDeepAllInput],
    ["service-import-deep-all.output.js", getServiceImportDeepOutput],
    ["service-import-deep-with-name.input.js", getServiceImportDeepWithNameInput],
    ["service-import-deep-with-name.output.js", getServiceImportDeepWithNameOutput],
    ["service-import-deep-star.input.js", getServiceImportDeepStarInput],
    ["service-import-deep-star.output.js", getServiceImportDeepStarOutput],
    ["service-import-deep-star-with-name.input.js", getServiceImportDeepStarWithNameInput],
    ["service-import-deep-star-with-name.output.js", getServiceImportDeepStarWithNameOutput],
    ["service-import-with-name.input.js", getServiceImportWithNameInput],
    ["service-import-with-name.output.js", getServiceImportWithNameOutput],
    ["service-require.input.js", getServiceRequireInput],
    ["service-require.output.js", getServiceRequireOutput],
    ["service-require-deep-all.input.js", getServiceRequireDeepAllInput],
    ["service-require-deep-all.output.js", getServiceRequireOutput],
    ["service-require-deep.input.js", getServiceRequireDeepInput],
    ["service-require-deep.output.js", getServiceRequireDeepOutput],
    ["service-require-deep-with-name.input.js", getServiceRequireDeepWithNameInput],
    ["service-require-deep-with-name.output.js", getServiceRequireDeepWithNameOutput],
    ["service-require-with-name.input.js", getServiceRequireWithNameInput],
    ["service-require-with-name.output.js", getServiceRequireWithNameOutput],
  ] as [string, () => string][]) {
    const filePath = join(newClientTestsPath, fileName);
    const fileContent = getFileContent();

    // Retaining top-level comment adds extra newlines to the output in case of imports.
    const fileContentWithComment = [".output.", "-import"].every((s) => fileName.includes(s))
      ? `${codegenComment}\n\n\n${fileContent}`
      : `${codegenComment}\n${fileContent}`;

    await writeFile(filePath, fileContentWithComment);
  }
})();

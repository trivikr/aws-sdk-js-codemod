import { writeFile } from "fs/promises";
import { join } from "path";

import {
  getGlobalImportInputContent,
  getGlobalImportOutputContent,
} from "./getGlobalImportContent";

// The "use strict" directive is added to so that comments can be attached to it.
// Recast removes the comments while removing import/require.
// Details in https://github.com/awslabs/aws-sdk-js-codemod/issues/205
const codegenComment = `// This file is generated by scripts/generateNewClientTests.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.
"use strict";`;

const newClientsTestsFolder = join("src", "transforms", "v2-to-v3", "__fixtures__", "new-client");
const newClientTestsPath = join(__dirname, "..", newClientsTestsFolder);

(async () => {
  // overwrite `global-import.input.js`
  const globalImportInputPath = join(newClientTestsPath, `global-import.input.js`);
  await writeFile(globalImportInputPath, getGlobalImportInputContent(codegenComment));

  // overwrite `global-import.output.js`
  const globalImportOutputPath = join(newClientTestsPath, `global-import.output.js`);
  await writeFile(globalImportOutputPath, getGlobalImportOutputContent(codegenComment));
})();

#!/usr/bin/env node

/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Could not find a declaration file for module 'jscodeshift/dist/Runner'
import { run as jRun } from "jscodeshift/dist/Runner";
import { resolve } from "path";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: package.json will be imported from dist folders
import { version } from "../package.json"; // eslint-disable-line
import {
  getArgsWithUpdatedTransformFile,
  getHelpParagraph,
  getJsCodeshiftParser,
  getTransformFileFromArgs,
  getTransforms,
  getUpdatedTransformFile,
} from "./utils";

export const run = async (args: string[]): Promise<void> => {
  const transforms = getTransforms();

  if (args[0] === "--version") {
    process.stdout.write(`aws-sdk-js-codemod: ${version}\n\n`);
  } else if (args[0] === "--help" || args[0] === "-h") {
    process.stdout.write(getHelpParagraph(transforms));
  } else if (args.includes("-t") || args.some((arg) => arg.startsWith("--transform="))) {
    const transformFile = getTransformFileFromArgs(args);
    if (transforms.map(({ name }) => name).includes(transformFile)) {
      const updatedTransformFile = getUpdatedTransformFile(transformFile);
      args = getArgsWithUpdatedTransformFile(args, updatedTransformFile);
    }
  }

  const parser = getJsCodeshiftParser();
  let options, positionalArguments;

  try {
    ({ options, positionalArguments } = parser.parse());
    if (positionalArguments.length === 0) {
      process.stderr.write(
        "Error: You have to provide at least one file/directory to transform." +
          "\n\n---\n\n" +
          parser.getHelpText()
      );
      process.exit(1);
    }
  } catch (e: any) {
    const exitCode = e.exitCode === undefined ? 1 : e.exitCode;
    (exitCode ? process.stderr : process.stdout).write(e.message);
    process.exit(exitCode);
  }

  jRun(resolve(options.transform), positionalArguments, options);
};

const [, , ...args] = process.argv;

run(args);

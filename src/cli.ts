#!/usr/bin/env node

import { spawn } from "child_process";
import { resolve } from "path";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: package.json will be imported from dist folders
import { version } from "../package.json"; // eslint-disable-line
import { getHelpParagraph, getTransforms } from "./utils";

const getTransformFile = (args: string[]): string => {
  if (args.includes("-t")) {
    const transformIndex = args.indexOf("-t");
    return args[transformIndex + 1];
  }

  const transformArg = args.find((arg) => arg.startsWith("--transform="));
  if (!transformArg) {
    throw new Error("No transform file specified in -t or --transform.");
  }
  return transformArg.split("=")[1];
};

const getUpdatedTransformFile = (transformFolder: string) =>
  resolve(__dirname, "transforms", transformFolder, "transformer.js");

const getArgsWithUpdatedTransformFile = (
  args: string[],
  updatedTransformFile: string
): string[] => {
  if (args.includes("-t")) {
    const transformIndex = args.indexOf("-t");
    args[transformIndex + 1] = updatedTransformFile;
    return args;
  }

  const transformArg = args.find((arg) => arg.startsWith("--transform="));
  if (!transformArg) {
    throw new Error("No transform file specified in -t or --transform.");
  }
  const transformIndex = args.indexOf(transformArg);
  args[transformIndex] = `--transform=${updatedTransformFile}`;
  return args;
};

export const run = async (args: string[]): Promise<void> => {
  const transforms = getTransforms();

  if (args[0] === "--version") {
    process.stdout.write(`aws-sdk-js-codemod: ${version}\n\n`);
  } else if (args[0] === "--help" || args[0] === "-h") {
    process.stdout.write(getHelpParagraph(transforms));
  } else if (args.includes("-t") || args.some((arg) => arg.startsWith("--transform="))) {
    const transformFile = getTransformFile(args);
    if (transforms.map(({ name }) => name).includes(transformFile)) {
      const updatedTransformFile = getUpdatedTransformFile(transformFile);
      args = getArgsWithUpdatedTransformFile(args, updatedTransformFile);
    }
  }
  spawn("npm", ["exec", "jscodeshift", "--", ...args], {
    stdio: "inherit",
    shell: process.platform == "win32",
  });
};

const [, , ...args] = process.argv;

run(args);

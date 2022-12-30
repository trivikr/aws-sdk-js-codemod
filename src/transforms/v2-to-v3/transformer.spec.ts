import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import jscodeshift from "jscodeshift";
import { join } from "path";

import transform from "./transformer";

describe("v2-to-v3", () => {
  jest.setTimeout(30000);

  const inputFileRegex = /(.*).input.[jt]sx?$/;
  const fixtureDir = join(__dirname, "__fixtures__");
  const fixtureSubDirs = readdirSync(fixtureDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const getTestFileMetadata = (dirPath: string) =>
    readdirSync(dirPath)
      .filter((fileName) => inputFileRegex.test(fileName))
      .map(
        (fileName) =>
          [
            (fileName.match(inputFileRegex) as RegExpMatchArray)[1],
            fileName.split(".").pop() as string,
          ] as const
      );

  const getTestMetadata = async (dirPath: string, filePrefix: string, fileExtension: string) => {
    const inputPath = join(dirPath, [filePrefix, "input", fileExtension].join("."));
    const outputPath = join(dirPath, [filePrefix, "output", fileExtension].join("."));
    const inputCode = await readFile(inputPath, "utf8");
    const outputCode = await readFile(outputPath, "utf8");

    const input = { path: inputPath, source: inputCode };
    return { input, outputCode };
  };

  describe.each(["new-client"])("%s", (subDir) => {
    const subDirPath = join(fixtureDir, subDir);
    it.concurrent.each(getTestFileMetadata(subDirPath))(
      `transforms: %s.%s`,
      async (filePrefix, fileExtension) => {
        const startDate = new Date();
        console.log(`${filePrefix} start: `, startDate.toTimeString());

        console.log(`${filePrefix} before file read: `, new Date().toTimeString());
        const { input, outputCode } = await getTestMetadata(subDirPath, filePrefix, fileExtension);
        console.log(`${filePrefix} transform start: `, new Date().toTimeString());
        const output = await transform(input, {
          j: jscodeshift,
          jscodeshift,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          stats: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          report: () => {},
        });
        console.log(`${filePrefix} transform end: `, new Date().toTimeString());

        expect(output.trim()).toEqual(outputCode.trim());

        const endDate = new Date();
        console.log(`${filePrefix} end: ${endDate.toTimeString()}`);
        console.log(`${filePrefix} test run time: ${endDate.getTime() - startDate.getTime()}ms`);
      }
    );
  });
});

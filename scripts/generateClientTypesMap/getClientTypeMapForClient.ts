import { readFile } from "fs/promises";
import jscodeshift from "jscodeshift";
import { join } from "path";

export const getClientTypeMapForClient = async (
  clientName: string
): Promise<Record<string, string>> => {
  const clientTypesMap = {};

  const typesPath = join("node_modules", "aws-sdk", "clients", `${clientName.toLowerCase()}.d.ts`);
  const relativeTypesPath = join(__dirname, "..", "..", typesPath);

  const typesCode = await readFile(relativeTypesPath, "utf8");

  const j = jscodeshift.withParser("ts");
  const source = j(typesCode);

  source.find(j.TSModuleDeclaration, { id: { name: clientName } }).forEach((moduleDeclaration) => {
    j(moduleDeclaration)
      .find(j.TSTypeAliasDeclaration)
      .nodes()
      .forEach((tsType) => {
        const { id } = tsType;
        clientTypesMap[id.name] = "";
      });
  });

  return clientTypesMap;
};

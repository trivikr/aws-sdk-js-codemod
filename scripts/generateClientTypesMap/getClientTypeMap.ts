import { readFile } from "fs/promises";
import jscodeshift, { Identifier, TSTypeReference } from "jscodeshift";
import { join } from "path";

const TYPES_TO_SKIP = ["apiVersion", "ClientConfiguration"];

export const getClientTypeMap = async (clientName: string): Promise<Record<string, string>> => {
  const clientTypesMap = {};

  const typesPath = join("node_modules", "aws-sdk", "clients", `${clientName.toLowerCase()}.d.ts`);
  const relativeTypesPath = join(__dirname, "..", "..", typesPath);

  const typesCode = await readFile(relativeTypesPath, "utf8");

  const j = jscodeshift.withParser("ts");
  const source = j(typesCode);

  source.find(j.TSModuleDeclaration, { id: { name: clientName } }).forEach((moduleDeclaration) => {
    const tsTypes = j(moduleDeclaration).find(j.TSTypeAliasDeclaration).nodes();

    for (const [type, value] of [
      ["TSStringKeyword", "string"],
      ["TSNumberKeyword", "number"],
      ["TSBooleanKeyword", "boolean"],
    ]) {
      tsTypes
        .filter((tsType) => tsType.typeAnnotation.type === type)
        .forEach((tsType) => {
          clientTypesMap[tsType.id.name] = value;
        });
    }

    tsTypes
      .filter((tsType) => tsType.typeAnnotation.type === "TSTypeReference")
      .forEach((tsType) => {
        const name = tsType.id.name;
        const typeName = ((tsType.typeAnnotation as TSTypeReference).typeName as Identifier).name;
        if (typeName === "Date") {
          clientTypesMap[name] = typeName;
        }
      });

    tsTypes
      .filter((tsType) => tsType.typeAnnotation.type === "TSUnionType")
      .forEach((tsType) => {
        const name = tsType.id.name;
        if (name.endsWith("Blob")) {
          clientTypesMap[name] = "Uint8Array";
        } else if (name !== "apiVersion") {
          clientTypesMap[name] = "string";
        }
      });

    tsTypes.forEach((tsType) => {
      const name = tsType.id.name;
      if (!TYPES_TO_SKIP.includes(name) && !clientTypesMap[name]) {
        clientTypesMap[name] = "";
      }
    });
  });

  return Object.entries(clientTypesMap)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
};

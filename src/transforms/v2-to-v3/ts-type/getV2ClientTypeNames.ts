import { Collection, Identifier, JSCodeshift, TSQualifiedName, TSTypeReference } from "jscodeshift";

import { getImportSpecifiers } from "../modules";
import { getClientDeepImportPath, getClientTSTypeRef } from "../utils";

export interface GetV2ClientTypeNamesOptions {
  v2ClientName: string;
  v2GlobalName?: string;
  v2ClientLocalName: string;
}

const getRightIdentifierName = (
  j: JSCodeshift,
  source: Collection<unknown>,
  tsTypeRef: TSTypeReference
) =>
  source
    .find(j.TSTypeReference, tsTypeRef)
    .nodes()
    .map((node) => (node.typeName as TSQualifiedName).right)
    .filter((node) => node.type === "Identifier")
    .map((node) => (node as Identifier).name);

export const getV2ClientTypeNames = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2ClientLocalName, v2ClientName, v2GlobalName }: GetV2ClientTypeNamesOptions
): string[] => {
  const v2ClientTypeNames = [];

  if (v2GlobalName) {
    const globalTSTypeRef = getClientTSTypeRef({
      v2ClientName,
      v2GlobalName,
      withoutRightSection: true,
    });
    v2ClientTypeNames.push(...getRightIdentifierName(j, source, globalTSTypeRef));
  }

  const clientTSTypeRef = getClientTSTypeRef({ v2ClientLocalName, withoutRightSection: true });
  v2ClientTypeNames.push(...getRightIdentifierName(j, source, clientTSTypeRef));

  v2ClientTypeNames.push(
    ...getImportSpecifiers(j, source, getClientDeepImportPath(v2ClientName))
      .filter(
        (importSpecifier) =>
          importSpecifier.type === "ImportSpecifier" &&
          importSpecifier.local &&
          importSpecifier.local.type === "Identifier"
      )
      .map((importSpecifier) => (importSpecifier.local as Identifier).name)
  );

  return [...new Set(v2ClientTypeNames)];
};

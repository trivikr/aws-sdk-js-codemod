import { Collection, JSCodeshift } from "jscodeshift";

import { containsRequire } from "../containsRequire";
import { getV2ClientTypeNames, getV2ServiceModulePath } from "../get";
import { removeImportIdentifierName } from "./removeImportIdentifierName";
import { removeRequireIdentifierName } from "./removeRequireIdentifierName";

export interface RemoveV2ClientModuleOptions {
  v2ClientName: string;
  v2DefaultModuleName: string;
}

export const removeV2ClientModule = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2ClientName, v2DefaultModuleName }: RemoveV2ClientModuleOptions
) => {
  const literalValue = getV2ServiceModulePath(v2ClientName);
  const removeIdentifierNameOptions = {
    identifierName: v2ClientName,
    literalValue,
  };

  if (containsRequire(j, source)) {
    removeRequireIdentifierName(j, source, removeIdentifierNameOptions);
  } else {
    removeImportIdentifierName(j, source, removeIdentifierNameOptions);

    const v2ClientTypeNames = getV2ClientTypeNames(j, source, {
      v2ClientName,
      v2DefaultModuleName,
    });
    for (const v2ClientTypeName of v2ClientTypeNames) {
      removeImportIdentifierName(j, source, {
        identifierName: v2ClientTypeName,
        literalValue,
      });
    }
  }
};

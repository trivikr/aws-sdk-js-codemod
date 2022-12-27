import { Collection, JSCodeshift } from "jscodeshift";

import { getV2ClientNewExpression } from "../get";

export interface ReplaceClientCreationOptions {
  v2ClientName: string;
  v3ClientName: string;
  v2DefaultModuleName: string;
}

// Replace v2 client creation with v3 client creation.
export const replaceClientCreation = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2DefaultModuleName, v2ClientName, v3ClientName }: ReplaceClientCreationOptions
): void => {
  // Replace clients created with default module.
  source
    .find(j.NewExpression, getV2ClientNewExpression({ v2DefaultModuleName, v2ClientName }))
    .replaceWith((nodePath) => {
      const { node } = nodePath;
      node.callee = j.identifier(v3ClientName);
      return node;
    });

  // Replace clients created with client module.
  source
    .find(j.NewExpression, getV2ClientNewExpression({ v2ClientName }))
    .replaceWith((nodePath) => {
      const { node } = nodePath;
      node.callee = j.identifier(v3ClientName);
      return node;
    });
};

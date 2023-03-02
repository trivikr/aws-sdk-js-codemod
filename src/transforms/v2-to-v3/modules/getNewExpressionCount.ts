import { Collection, JSCodeshift } from "jscodeshift";

import { DYNAMODB } from "../config";
import { getClientNewExpression, getV2DocClientNewExpression } from "../utils";
import { ClientModulesOptions } from "./types";

export const getNewExpressionCount = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2ClientName, v2ClientLocalName, v2GlobalName }: ClientModulesOptions
): number => {
  let newExpressionCount = 0;

  if (v2GlobalName) {
    const newExpressionsFromGlobalName = source.find(
      j.NewExpression,
      getClientNewExpression({ v2ClientName, v2GlobalName })
    );
    newExpressionCount += newExpressionsFromGlobalName.length;

    if (v2ClientName === DYNAMODB) {
      const newExpressionsFromGlobalNameDocClient = source.find(
        j.NewExpression,
        getV2DocClientNewExpression({ v2GlobalName })
      );
      newExpressionCount += newExpressionsFromGlobalNameDocClient.length;
    }
  }

  const newExpressionsFromClientLocalName = source.find(
    j.NewExpression,
    getClientNewExpression({ v2ClientLocalName })
  );
  newExpressionCount += newExpressionsFromClientLocalName.length;

  return newExpressionCount;
};

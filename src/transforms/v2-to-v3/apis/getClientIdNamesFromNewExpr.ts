import { Collection, Identifier, JSCodeshift, NewExpression } from "jscodeshift";

import { DOCUMENT_CLIENT, DYNAMODB, DYNAMODB_DOCUMENT_CLIENT } from "../config";
import { getClientNewExpression } from "../utils";
import { getNewExpressionVariants } from "./getNewExpressionVariants";

export interface GetClientIdNamesFromNewExprOptions {
  v2ClientName: string;
  v2ClientLocalName: string;
  v2GlobalName?: string;
}

const getNamesFromVariableDeclarator = (
  j: JSCodeshift,
  source: Collection<unknown>,
  newExpression: NewExpression
) =>
  getNewExpressionVariants(newExpression)
    .map((newExpressionVariant) =>
      source
        .find(j.VariableDeclarator, {
          id: { type: "Identifier" },
          init: newExpressionVariant,
        })
        .nodes()
        .map((variableDeclarator) => (variableDeclarator.id as Identifier).name)
    )
    .flat();

const getNamesFromAssignmentPattern = (
  j: JSCodeshift,
  source: Collection<unknown>,
  newExpression: NewExpression
) =>
  getNewExpressionVariants(newExpression)
    .map((newExpressionVariant) =>
      source
        .find(j.AssignmentPattern, {
          left: { type: "Identifier" },
          right: newExpressionVariant,
        })
        .nodes()
        .map((assignmentPattern) => (assignmentPattern.left as Identifier).name)
    )
    .flat();

export const getClientIdNamesFromNewExpr = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { v2ClientName, v2ClientLocalName, v2GlobalName }: GetClientIdNamesFromNewExprOptions
): string[] => {
  const namesFromGlobalModule = [];
  const namesFromServiceModule = [];

  for (const getNames of [getNamesFromVariableDeclarator, getNamesFromAssignmentPattern]) {
    if (v2GlobalName) {
      namesFromGlobalModule.push(
        ...getNames(j, source, getClientNewExpression({ v2GlobalName, v2ClientName }))
      );
      if (v2ClientName === DYNAMODB) {
        namesFromGlobalModule.push(
          ...getNames(
            j,
            source,
            getClientNewExpression({ v2GlobalName, v2ClientName: DYNAMODB_DOCUMENT_CLIENT })
          )
        );
      }
    }
    namesFromServiceModule.push(
      ...getNames(j, source, getClientNewExpression({ v2ClientLocalName }))
    );
    if (v2ClientName === DYNAMODB) {
      namesFromServiceModule.push(
        ...getNames(
          j,
          source,
          getClientNewExpression({ v2ClientLocalName: `${v2ClientLocalName}.${DOCUMENT_CLIENT}` })
        )
      );
    }
  }

  return [...new Set([...namesFromGlobalModule, ...namesFromServiceModule])];
};

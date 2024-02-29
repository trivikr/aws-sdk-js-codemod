import { TSImportEqualsDeclaration } from "jscodeshift";

export const getImportEqualsDeclarationType = (expressionValue: string) =>
  ({
    type: "TSImportEqualsDeclaration",
    moduleReference: {
      type: "TSExternalModuleReference",
      expression: { type: "StringLiteral", value: expressionValue },
    },
  }) as TSImportEqualsDeclaration;

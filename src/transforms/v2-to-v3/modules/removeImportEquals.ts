import { Collection, JSCodeshift } from "jscodeshift";
import { removeDeclaration } from "./removeDeclaration";

export interface RemoveImportEqualsOptions {
  localName: string;
  sourceValue: string;
}

export const removeImportEquals = (
  j: JSCodeshift,
  source: Collection<unknown>,
  { localName, sourceValue }: RemoveImportEqualsOptions
) => {
  const importEqualsDeclaration = source.find(j.TSImportEqualsDeclaration, {
    type: "TSImportEqualsDeclaration",
    id: { name: localName },
    moduleReference: {
      type: "TSExternalModuleReference",
      expression: { type: "StringLiteral", value: sourceValue },
    },
  });
  if (importEqualsDeclaration.length) {
    removeDeclaration(j, source, importEqualsDeclaration.get());
  }
};

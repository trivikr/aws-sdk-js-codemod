export interface ClientModulesOptions {
  v2ClientName: string;
  v2ClientLocalName: string;
  v2GlobalName?: string;
  v3ClientName: string;
  v3ClientPackageName: string;
}

export interface RequirePropertyOptions {
  keyName: string;
  valueName?: string;
}

export interface V3ClientImportSpecifierOptions {
  importedName: string;
  localName?: string;
}

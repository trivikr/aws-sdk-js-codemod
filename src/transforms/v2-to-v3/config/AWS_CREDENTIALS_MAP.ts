/**
 * Maps the AWS credentials class name in v2 to the v3 equivalent provider.
 */
export const AWS_CREDENTIALS_MAP: Record<string, string> = {
  ChainableTemporaryCredentials: "fromTemporaryCredentials",
  EC2MetadataCredentials: "fromInstanceMetadata",
  ECSCredentials: "fromContainerMetadata",
  EnvironmentCredentials: "fromEnv",
  RemoteCredentials: "fromContainerMetadata",
  SharedIniFileCredentials: "fromIni",
  TokenFileWebIdentityCredentials: "fromTokenFile",
  WebIdentityCredentials: "fromWebToken",
};

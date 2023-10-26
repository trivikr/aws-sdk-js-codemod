import DynamoDB = require("aws-sdk/clients/dynamodb");
import Lambda = require("aws-sdk/clients/lambda");
import STS = require("aws-sdk/clients/sts");

const ddbClient = new DynamoDB();
const listTablesInput: DynamoDB.ListTablesInput = { Limit: 10 };
const listTablesOutput: DynamoDB.ListTablesOutput = await ddbClient
  .listTables(listTablesInput)
  .promise();

const stsClient = new STS();
const getCallerIdentityInput: STS.GetCallerIdentityRequest = {};
const getCallerIdentityOutput: STS.GetCallerIdentityResponse = await stsClient
  .getCallerIdentity(getCallerIdentityInput)
  .promise();

const lambdaClient = new Lambda();
const invokeInput: Lambda.InvocationRequest = { FunctionName: "my-function" };
const invokeOutput: Lambda.InvocationResponse = await lambdaClient
  .invoke(invokeInput)
  .promise();
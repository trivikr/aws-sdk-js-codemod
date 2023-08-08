const DynDB = require("aws-sdk/clients/dynamodb");

const docClient = new DynDB.DocumentClient({ region: "us-west-2" });

const docClientScanInput: typeof DynDB.DocumentClient.ScanInput = {
  TableName: "TableName"
};

const docClientScanOutput: typeof DynDB.DocumentClient.ScanOutput = await docClient
  .scan(docClientScanInput)
  .promise();
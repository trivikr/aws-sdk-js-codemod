import AWS from "aws-sdk";

const params = { region: "us-west-2" };
const documentClient = new AWS.DynamoDB.DocumentClient({
  service: new AWS.DynamoDB(params),
});
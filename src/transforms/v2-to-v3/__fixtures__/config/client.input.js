import AWS from "aws-sdk";

const client = new AWS.DynamoDB({
  correctClockSkew: true
});
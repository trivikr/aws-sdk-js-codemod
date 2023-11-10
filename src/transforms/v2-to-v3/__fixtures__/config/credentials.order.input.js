import AWS from "aws-sdk";

const credsAfter = new AWS.Config({
  logger: console,
  region: "us-east-1",
  accessKeyId: "KEY",
  secretAccessKey: "SECRET"
});

const credsBefore = new AWS.Config({
  accessKeyId: "KEY",
  secretAccessKey: "SECRET",
  logger: console,
  region: "us-east-1",
});

const credsInBetween = new AWS.Config({
  logger: console,
  accessKeyId: "KEY",
  secretAccessKey: "SECRET",
  region: "us-east-1",
});
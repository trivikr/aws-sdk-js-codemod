import AWS from "aws-sdk";

const config = new AWS.Config({
  signatureCache: true
});
const S3 = require("aws-sdk/clients/s3");

const testTags: typeof S3.Tag[] = [{ Key: "key", Value: "value" }];
import AWS_client_s3 = require("@aws-sdk/client-s3");
import Tag = AWS_client_s3.Tag;

const testTags: Tag[] = [{ Key: "key", Value: "value" }];
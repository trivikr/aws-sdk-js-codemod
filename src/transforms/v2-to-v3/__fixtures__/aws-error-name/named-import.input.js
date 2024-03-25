import { S3 } from "aws-sdk";

const client = new S3();

try {
  await client.createBucket({
    Bucket: "bucket"
  }).promise();
} catch (error) {
  if (error.code === "BucketAlreadyExists") {
    // Handle BucketAlreadyExists error
  } else {
    throw error;
  }
}
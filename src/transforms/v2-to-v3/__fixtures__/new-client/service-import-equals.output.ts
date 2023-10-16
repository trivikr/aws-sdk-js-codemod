// This file is generated by scripts/generateNewClientTests/index.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.


import AWS_ACM = require("@aws-sdk/client-acm");

const {
  ACM
} = AWS_ACM;

import AWS_AccessAnalyzer = require("@aws-sdk/client-accessanalyzer");

const {
  AccessAnalyzer
} = AWS_AccessAnalyzer;

import AWS_Discovery = require("@aws-sdk/client-application-discovery-service");

const {
  ApplicationDiscoveryService
} = AWS_Discovery;

new ACM();
new AccessAnalyzer();
new ApplicationDiscoveryService();

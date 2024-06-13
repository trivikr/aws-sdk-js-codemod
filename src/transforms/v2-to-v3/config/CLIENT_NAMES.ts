// The client names as they appear in v2.
export const CLIENT_NAMES = [
  "ACM",
  "ACMPCA",
  "APIGateway",
  "ARCZonalShift",
  "AccessAnalyzer",
  "Account",
  "AlexaForBusiness",
  "Amp",
  "Amplify",
  "AmplifyBackend",
  "AmplifyUIBuilder",
  "ApiGatewayManagementApi",
  "ApiGatewayV2",
  "AppConfig",
  "AppConfigData",
  "AppFabric",
  "AppIntegrations",
  "AppMesh",
  "AppRunner",
  "AppStream",
  "AppSync",
  "AppTest",
  "Appflow",
  "ApplicationAutoScaling",
  "ApplicationCostProfiler",
  "ApplicationInsights",
  "ApplicationSignals",
  "Artifact",
  "Athena",
  "AuditManager",
  "AugmentedAIRuntime",
  "AutoScaling",
  "AutoScalingPlans",
  "B2bi",
  "BCMDataExports",
  "Backup",
  "BackupGateway",
  "BackupStorage",
  "Batch",
  "Bedrock",
  "BedrockAgent",
  "BedrockAgentRuntime",
  "BedrockRuntime",
  "Billingconductor",
  "Braket",
  "Budgets",
  "CUR",
  "Chatbot",
  "Chime",
  "ChimeSDKIdentity",
  "ChimeSDKMediaPipelines",
  "ChimeSDKMeetings",
  "ChimeSDKMessaging",
  "ChimeSDKVoice",
  "CleanRooms",
  "CleanRoomsML",
  "Cloud9",
  "CloudControl",
  "CloudDirectory",
  "CloudFormation",
  "CloudFront",
  "CloudHSM",
  "CloudHSMV2",
  "CloudSearch",
  "CloudSearchDomain",
  "CloudTrail",
  "CloudTrailData",
  "CloudWatch",
  "CloudWatchEvents",
  "CloudWatchLogs",
  "CodeArtifact",
  "CodeBuild",
  "CodeCatalyst",
  "CodeCommit",
  "CodeConnections",
  "CodeDeploy",
  "CodeGuruProfiler",
  "CodeGuruReviewer",
  "CodeGuruSecurity",
  "CodePipeline",
  "CodeStar",
  "CodeStarNotifications",
  "CodeStarconnections",
  "CognitoIdentity",
  "CognitoIdentityServiceProvider",
  "CognitoSync",
  "Comprehend",
  "ComprehendMedical",
  "ComputeOptimizer",
  "ConfigService",
  "Connect",
  "ConnectCampaigns",
  "ConnectCases",
  "ConnectContactLens",
  "ConnectParticipant",
  "ControlCatalog",
  "ControlTower",
  "CostExplorer",
  "CostOptimizationHub",
  "CustomerProfiles",
  "DAX",
  "DLM",
  "DMS",
  "DataBrew",
  "DataExchange",
  "DataPipeline",
  "DataSync",
  "DataZone",
  "Deadline",
  "Detective",
  "DevOpsGuru",
  "DeviceFarm",
  "DirectConnect",
  "DirectoryService",
  "Discovery",
  "DocDB",
  "DocDBElastic",
  "Drs",
  "DynamoDB",
  "DynamoDBStreams",
  "EBS",
  "EC2",
  "EC2InstanceConnect",
  "ECR",
  "ECRPUBLIC",
  "ECS",
  "EFS",
  "EKS",
  "EKSAuth",
  "ELB",
  "ELBv2",
  "EMR",
  "EMRServerless",
  "EMRcontainers",
  "ES",
  "ElastiCache",
  "ElasticBeanstalk",
  "ElasticInference",
  "ElasticTranscoder",
  "EntityResolution",
  "EventBridge",
  "Evidently",
  "FMS",
  "FSx",
  "Finspace",
  "Finspacedata",
  "Firehose",
  "Fis",
  "ForecastQueryService",
  "ForecastService",
  "FraudDetector",
  "FreeTier",
  "GameLift",
  "Glacier",
  "GlobalAccelerator",
  "Glue",
  "Grafana",
  "Greengrass",
  "GreengrassV2",
  "GroundStation",
  "GuardDuty",
  "Health",
  "HealthLake",
  "Honeycode",
  "IAM",
  "IVS",
  "IVSRealTime",
  "IdentityStore",
  "Imagebuilder",
  "Inspector",
  "Inspector2",
  "InspectorScan",
  "InternetMonitor",
  "IoT1ClickDevicesService",
  "IoT1ClickProjects",
  "IoTAnalytics",
  "IoTEvents",
  "IoTEventsData",
  "IoTFleetHub",
  "IoTFleetWise",
  "IoTJobsDataPlane",
  "IoTSecureTunneling",
  "IoTSiteWise",
  "IoTThingsGraph",
  "IoTTwinMaker",
  "IoTWireless",
  "Iot",
  "IotData",
  "IotDeviceAdvisor",
  "Ivschat",
  "KMS",
  "Kafka",
  "KafkaConnect",
  "Kendra",
  "KendraRanking",
  "Keyspaces",
  "Kinesis",
  "KinesisAnalytics",
  "KinesisAnalyticsV2",
  "KinesisVideo",
  "KinesisVideoArchivedMedia",
  "KinesisVideoMedia",
  "KinesisVideoSignalingChannels",
  "KinesisVideoWebRTCStorage",
  "LakeFormation",
  "Lambda",
  "LaunchWizard",
  "LexModelBuildingService",
  "LexModelsV2",
  "LexRuntime",
  "LexRuntimeV2",
  "LicenseManager",
  "LicenseManagerLinuxSubscriptions",
  "LicenseManagerUserSubscriptions",
  "Lightsail",
  "Location",
  "LookoutEquipment",
  "LookoutMetrics",
  "LookoutVision",
  "M2",
  "MQ",
  "MTurk",
  "MWAA",
  "MachineLearning",
  "Macie2",
  "MailManager",
  "ManagedBlockchain",
  "ManagedBlockchainQuery",
  "MarketplaceAgreement",
  "MarketplaceCatalog",
  "MarketplaceCommerceAnalytics",
  "MarketplaceDeployment",
  "MarketplaceEntitlementService",
  "MarketplaceMetering",
  "MediaConnect",
  "MediaConvert",
  "MediaLive",
  "MediaPackage",
  "MediaPackageV2",
  "MediaPackageVod",
  "MediaStore",
  "MediaStoreData",
  "MediaTailor",
  "MedicalImaging",
  "MemoryDB",
  "Mgn",
  "MigrationHub",
  "MigrationHubConfig",
  "MigrationHubOrchestrator",
  "MigrationHubRefactorSpaces",
  "MigrationHubStrategy",
  "Mobile",
  "Neptune",
  "Neptunedata",
  "NetworkFirewall",
  "NetworkManager",
  "NetworkMonitor",
  "Nimble",
  "OAM",
  "OSIS",
  "Omics",
  "OpenSearch",
  "OpenSearchServerless",
  "OpsWorks",
  "OpsWorksCM",
  "Organizations",
  "Outposts",
  "PI",
  "Panorama",
  "PaymentCryptography",
  "PaymentCryptographyData",
  "PcaConnectorAd",
  "PcaConnectorScep",
  "Personalize",
  "PersonalizeEvents",
  "PersonalizeRuntime",
  "Pinpoint",
  "PinpointEmail",
  "PinpointSMSVoice",
  "PinpointSMSVoiceV2",
  "Pipes",
  "Polly",
  "Pricing",
  "PrivateNetworks",
  "Proton",
  "QBusiness",
  "QConnect",
  "QLDB",
  "QLDBSession",
  "QuickSight",
  "RAM",
  "RDS",
  "RDSDataService",
  "RUM",
  "Rbin",
  "Redshift",
  "RedshiftData",
  "RedshiftServerless",
  "Rekognition",
  "Repostspace",
  "Resiliencehub",
  "ResourceExplorer2",
  "ResourceGroups",
  "ResourceGroupsTaggingAPI",
  "RoboMaker",
  "RolesAnywhere",
  "Route53",
  "Route53Domains",
  "Route53Profiles",
  "Route53RecoveryCluster",
  "Route53RecoveryControlConfig",
  "Route53RecoveryReadiness",
  "Route53Resolver",
  "S3",
  "S3Control",
  "S3Outposts",
  "SES",
  "SESV2",
  "SMS",
  "SNS",
  "SQS",
  "SSM",
  "SSMContacts",
  "SSMIncidents",
  "SSO",
  "SSOAdmin",
  "SSOOIDC",
  "STS",
  "SWF",
  "SageMaker",
  "SageMakerFeatureStoreRuntime",
  "SageMakerGeospatial",
  "SageMakerMetrics",
  "SageMakerRuntime",
  "SagemakerEdge",
  "SavingsPlans",
  "Scheduler",
  "Schemas",
  "SecretsManager",
  "SecurityHub",
  "SecurityLake",
  "ServerlessApplicationRepository",
  "ServiceCatalog",
  "ServiceCatalogAppRegistry",
  "ServiceDiscovery",
  "ServiceQuotas",
  "Shield",
  "Signer",
  "SimSpaceWeaver",
  "SnowDeviceManagement",
  "Snowball",
  "SsmSap",
  "StepFunctions",
  "StorageGateway",
  "SupplyChain",
  "Support",
  "SupportApp",
  "Synthetics",
  "TaxSettings",
  "Textract",
  "TimestreamInfluxDB",
  "TimestreamQuery",
  "TimestreamWrite",
  "Tnb",
  "TranscribeService",
  "Transfer",
  "Translate",
  "TrustedAdvisor",
  "VPCLattice",
  "VerifiedPermissions",
  "VoiceID",
  "WAF",
  "WAFRegional",
  "WAFV2",
  "WellArchitected",
  "Wisdom",
  "WorkDocs",
  "WorkLink",
  "WorkMail",
  "WorkMailMessageFlow",
  "WorkSpaces",
  "WorkSpacesThinClient",
  "WorkSpacesWeb",
  "XRay",
];

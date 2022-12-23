import { CLIENT_NAMES } from "./CLIENT_NAMES";

export const CLIENT_PACKAGE_NAMES_MAP: Record<string, string> = {
  ...CLIENT_NAMES.reduce(
    (acc, name) => ({
      ...acc,
      [name]: `client-${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
        .replace("-chime-sdk", "-chime-sdk-")
        .replace("client-amplify-", "client-amplify")
        .replace("client-cloud-", "client-cloud")
        .replace("client-code-", "client-code")
        .replace("client-connect-", "client-connect")
        .replace("client-data-", "client-data")
        .replace("client-io-t", "client-iot-")
        .replace("client-iot-fleet-", "client-iotfleet")
        .replace("client-lookout-", "client-lookout")
        .replace("client-media-", "client-media")
        .replace("client-route53", "client-route53-")
        .replace("client-sage-maker", "client-sagemaker")
        .replace("client-work-", "client-work"),
    }),
    {}
  ),
  AccessAnalyzer: "client-accessanalyzer",
  ACMPCA: "client-acm-pca",
  APIGateway: "client-api-gateway",
  ApiGatewayManagementApi: "client-apigatewaymanagementapi",
  ApiGatewayV2: "client-apigatewayv2",
  AppConfig: "client-appconfig",
  AppConfigData: "client-appconfigdata",
  AppIntegrations: "client-appintegrations",
  AppRunner: "client-apprunner",
  AppStream: "client-appstream",
  AppSync: "client-appsync",
  ApplicationCostProfiler: "client-applicationcostprofiler",
  ARCZonalShift: "client-arc-zonal-shift",
  AugmentedAIRuntime: "client-sage-maker-a2iruntime",
  AuditManager: "client-auditmanager",
  BackupStorage: "client-backupstorage",
  CUR: "client-cost-and-usage-report-service",
  CloudHSMV2: "client-cloudhsm-v2",
  CodeGuruProfiler: "client-codeguruprofiler",
  CodeStarconnections: "client-codestar-connections",
  CognitoIdentityServiceProvider: "client-cognito-identity-provider",
  ComprehendMedical: "client-comprehendmedical",
  ConnectContactLens: "client-connect-contact-lens",
  ControlTower: "client-controltower",
  DMS: "client-database-migration-service",
  DataPipeline: "client-data-pipeline",
  Discovery: "client-application-discovery-service",
  DevOpsGuru: "client-devops-guru",
  DynamoDB: "client-dynamodb",
  DynamoDBStreams: "client-dynamodb-streams",
  DocDB: "client-docdb",
  DocDBElastic: "client-docdb-elastic",
  EC2InstanceConnect: "client-ec2-instance-connect",
  ECRPUBLIC: "client-ecr-public",
  ELB: "client-elastic-load-balancing",
  ELBv2: "client-elastic-load-balancing-v2",
  ElastiCache: "client-elasticache",
  EMRcontainers: "client-emr-containers",
  EMRServerless: "client-emr-serverless",
  ES: "client-elasticsearch-service",
  EventBridge: "client-eventbridge",
  Finspacedata: "client-finspace-data",
  ForecastQueryService: "client-forecastquery",
  ForecastService: "client-forecast",
  FraudDetector: "client-frauddetector",
  GameLift: "client-gamelift",
  GameSparks: "client-gamesparks",
  GreengrassV2: "client-greengrassv2",
  GroundStation: "client-groundstation",
  GuardDuty: "client-guardduty",
  HealthLake: "client-healthlake",
  IdentityStore: "client-identitystore",
  IoTAnalytics: "client-iotanalytics",
  IotData: "client-iot-data-plane",
  IotDeviceAdvisor: "client-iotdeviceadvisor",
  IoTSecureTunneling: "client-iotsecuretunneling",
  IoTSiteWise: "client-iotsitewise",
  IoTThingsGraph: "client-iotthingsgraph",
  IoTTwinMaker: "client-iottwinmaker",
  KafkaConnect: "client-kafkaconnect",
  KinesisVideoSignalingChannels: "client-kinesis-video-signaling",
  LakeFormation: "client-lakeformation",
  LexRuntime: "client-lex-runtime-service",
  ManagedBlockchain: "client-managedblockchain",
  MigrationHubConfig: "client-migrationhub-config",
  MigrationHubStrategy: "client-migrationhubstrategy",
  NetworkManager: "client-networkmanager",
  OpenSearch: "client-opensearch",
  OpsWorks: "client-opsworks",
  OpsWorksCM: "client-opsworkscm",
  PinpointSMSVoice: "client-pinpoint-sms-voice",
  QLDBSession: "client-qldb-session",
  QuickSight: "client-quicksight",
  RDSDataService: "client-rds-data",
  RoboMaker: "client-robomaker",
  Route53: "client-route-53",
  Route53Domains: "client-route-53-domains",
  Route53Resolver: "client-route53resolver",
  S3Control: "client-s3-control",
  SageMakerFeatureStoreRuntime: "client-sagemaker-featurestore-runtime",
  SavingsPlans: "client-savingsplans",
  SecurityHub: "client-securityhub",
  ServerlessApplicationRepository: "client-serverlessapplicationrepository",
  ServiceCatalogAppRegistry: "client-service-catalog-appregistry",
  ServiceDiscovery: "client-servicediscovery",
  SSMContacts: "client-ssm-contacts",
  SSMIncidents: "client-ssm-incidents",
  SSOAdmin: "client-sso-admin",
  SSOOIDC: "client-sso-oidc",
  StepFunctions: "client-sfn",
  TranscribeService: "client-transcribe",
  WAFRegional: "client-waf-regional",
  WellArchitected: "client-wellarchitected",
  WorkMailMessageFlow: "client-workmailmessageflow",
};

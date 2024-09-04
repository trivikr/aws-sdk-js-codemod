import { CLIENT_NAMES } from "./CLIENT_NAMES";

// The key is the client name in v2, and value is the client package name in v3.
export const CLIENT_PACKAGE_NAMES_MAP: Record<string, string> = {
  ...CLIENT_NAMES.reduce((acc: Record<string, string>, name) => {
    acc[name] = `client-${name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`
      .replace("-chime-sdk", "-chime-sdk-")
      .replace("client-amplify-", "client-amplify")
      .replace("client-bcmdata-exports", "client-bcm-data-exports")
      .replace("client-control-catalog", "client-controlcatalog")
      .replace("client-clean-rooms-ml", "client-cleanroomsml")
      .replace("client-cloud-", "client-cloud")
      .replace("client-code-", "client-code")
      .replace("client-connect-", "client-connect")
      .replace("client-data-", "client-data")
      .replace("client-free-tier", "client-freetier")
      .replace("client-io-t", "client-iot-")
      .replace("client-iot-fleet-", "client-iotfleet")
      .replace("client-lookout-", "client-lookout")
      .replace("client-media-", "client-media")
      .replace("client-migration-hub-", "client-migrationhub")
      .replace("client-network-monitor", "client-networkmonitor")
      .replace("client-pinpoint-sms", "client-pinpoint-sms-")
      .replace("client-route53", "client-route53-")
      .replace("client-sage-maker", "client-sagemaker")
      .replace("client-security-", "client-security")
      .replace("client-supply-chain", "client-supplychain")
      .replace("client-timestream-influx-db", "client-timestream-influxdb")
      .replace("client-trusted-advisor", "client-trustedadvisor")
      .replace("client-work-", "client-work");
    return acc;
  }, {}),
  AccessAnalyzer: "client-accessanalyzer",
  ACMPCA: "client-acm-pca",
  APIGateway: "client-api-gateway",
  ApiGatewayManagementApi: "client-apigatewaymanagementapi",
  ApiGatewayV2: "client-apigatewayv2",
  AppConfig: "client-appconfig",
  AppConfigData: "client-appconfigdata",
  AppFabric: "client-appfabric",
  AppIntegrations: "client-appintegrations",
  AppRunner: "client-apprunner",
  AppStream: "client-appstream",
  AppSync: "client-appsync",
  AppTest: "client-apptest",
  ApplicationCostProfiler: "client-applicationcostprofiler",
  ARCZonalShift: "client-arc-zonal-shift",
  AugmentedAIRuntime: "client-sage-maker-a2iruntime",
  AuditManager: "client-auditmanager",
  BackupStorage: "client-backupstorage",
  CUR: "client-cost-and-usage-report-service",
  CleanRooms: "client-cleanrooms",
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
  EntityResolution: "client-entityresolution",
  EMRcontainers: "client-emr-containers",
  EMRServerless: "client-emr-serverless",
  ES: "client-elasticsearch-service",
  EventBridge: "client-eventbridge",
  Finspacedata: "client-finspace-data",
  ForecastQueryService: "client-forecastquery",
  ForecastService: "client-forecast",
  FraudDetector: "client-frauddetector",
  GameLift: "client-gamelift",
  GreengrassV2: "client-greengrassv2",
  GroundStation: "client-groundstation",
  GuardDuty: "client-guardduty",
  HealthLake: "client-healthlake",
  IdentityStore: "client-identitystore",
  InternetMonitor: "client-internetmonitor",
  IoTAnalytics: "client-iotanalytics",
  IotData: "client-iot-data-plane",
  IotDeviceAdvisor: "client-iotdeviceadvisor",
  IoTSecureTunneling: "client-iotsecuretunneling",
  IoTSiteWise: "client-iotsitewise",
  IoTThingsGraph: "client-iotthingsgraph",
  IoTTwinMaker: "client-iottwinmaker",
  IoTRoboRunner: "client-iot-roborunner",
  IVSRealTime: "client-ivs-realtime",
  KafkaConnect: "client-kafkaconnect",
  KinesisVideoSignalingChannels: "client-kinesis-video-signaling",
  KinesisVideoWebRTCStorage: "client-kinesis-video-webrtc-storage",
  LakeFormation: "client-lakeformation",
  LexRuntime: "client-lex-runtime-service",
  MailManager: "client-mailmanager",
  ManagedBlockchain: "client-managedblockchain",
  ManagedBlockchainQuery: "client-managedblockchain-query",
  MediaPackageV2: "client-mediapackagev2",
  MigrationHubConfig: "client-migrationhub-config",
  MigrationHubRefactorSpaces: "client-migration-hub-refactor-spaces",
  NetworkManager: "client-networkmanager",
  OpenSearch: "client-opensearch",
  OpenSearchServerless: "client-opensearchserverless",
  OpsWorks: "client-opsworks",
  OpsWorksCM: "client-opsworkscm",
  PrivateNetworks: "client-privatenetworks",
  QLDBSession: "client-qldb-session",
  QuickSight: "client-quicksight",
  ResourceExplorer2: "client-resource-explorer-2",
  RDSDataService: "client-rds-data",
  RoboMaker: "client-robomaker",
  RolesAnywhere: "client-rolesanywhere",
  Route53: "client-route-53",
  Route53Domains: "client-route-53-domains",
  Route53Profiles: "client-route53profiles",
  Route53Resolver: "client-route53resolver",
  S3Control: "client-s3-control",
  SageMakerFeatureStoreRuntime: "client-sagemaker-featurestore-runtime",
  SavingsPlans: "client-savingsplans",
  SecurityHub: "client-securityhub",
  ServerlessApplicationRepository: "client-serverlessapplicationrepository",
  ServiceCatalogAppRegistry: "client-service-catalog-appregistry",
  ServiceDiscovery: "client-servicediscovery",
  SimSpaceWeaver: "client-simspaceweaver",
  SSMContacts: "client-ssm-contacts",
  SSMIncidents: "client-ssm-incidents",
  SSMQuickSetup: "client-ssm-quicksetup",
  SSOAdmin: "client-sso-admin",
  SSOOIDC: "client-sso-oidc",
  StepFunctions: "client-sfn",
  TaxSettings: "client-taxsettings",
  TranscribeService: "client-transcribe",
  VerifiedPermissions: "client-verifiedpermissions",
  VPCLattice: "client-vpc-lattice",
  WAFRegional: "client-waf-regional",
  WellArchitected: "client-wellarchitected",
  WorkMailMessageFlow: "client-workmailmessageflow",
};

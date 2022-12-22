const ACM = require("aws-sdk/clients/acm");
const ACMPCA = require("aws-sdk/clients/acmpca");
const APIGateway = require("aws-sdk/clients/apigateway");
const AccessAnalyzer = require("aws-sdk/clients/accessanalyzer");
const Account = require("aws-sdk/clients/account");
const AlexaForBusiness = require("aws-sdk/clients/alexaforbusiness");
const Amp = require("aws-sdk/clients/amp");
const Amplify = require("aws-sdk/clients/amplify");
const AmplifyBackend = require("aws-sdk/clients/amplifybackend");
const AmplifyUIBuilder = require("aws-sdk/clients/amplifyuibuilder");
const ApiGatewayManagementApi = require("aws-sdk/clients/apigatewaymanagementapi");
const ApiGatewayV2 = require("aws-sdk/clients/apigatewayv2");
const AppConfig = require("aws-sdk/clients/appconfig");
const AppConfigData = require("aws-sdk/clients/appconfigdata");
const AppIntegrations = require("aws-sdk/clients/appintegrations");
const AppMesh = require("aws-sdk/clients/appmesh");
const AppRunner = require("aws-sdk/clients/apprunner");
const AppStream = require("aws-sdk/clients/appstream");
const AppSync = require("aws-sdk/clients/appsync");
const Appflow = require("aws-sdk/clients/appflow");
const ApplicationAutoScaling = require("aws-sdk/clients/applicationautoscaling");
const ApplicationCostProfiler = require("aws-sdk/clients/applicationcostprofiler");
const ApplicationInsights = require("aws-sdk/clients/applicationinsights");
const Athena = require("aws-sdk/clients/athena");
const AuditManager = require("aws-sdk/clients/auditmanager");
const AugmentedAIRuntime = require("aws-sdk/clients/augmentedairuntime");
const AutoScaling = require("aws-sdk/clients/autoscaling");
const AutoScalingPlans = require("aws-sdk/clients/autoscalingplans");
const Backup = require("aws-sdk/clients/backup");
const BackupGateway = require("aws-sdk/clients/backupgateway");
const Batch = require("aws-sdk/clients/batch");
const Braket = require("aws-sdk/clients/braket");
const Budgets = require("aws-sdk/clients/budgets");
const CUR = require("aws-sdk/clients/cur");
const Chime = require("aws-sdk/clients/chime");
const ChimeSDKIdentity = require("aws-sdk/clients/chimesdkidentity");
const ChimeSDKMeetings = require("aws-sdk/clients/chimesdkmeetings");
const ChimeSDKMessaging = require("aws-sdk/clients/chimesdkmessaging");
const Cloud9 = require("aws-sdk/clients/cloud9");
const CloudControl = require("aws-sdk/clients/cloudcontrol");
const CloudDirectory = require("aws-sdk/clients/clouddirectory");
const CloudFormation = require("aws-sdk/clients/cloudformation");
const CloudFront = require("aws-sdk/clients/cloudfront");
const CloudHSM = require("aws-sdk/clients/cloudhsm");
const CloudHSMV2 = require("aws-sdk/clients/cloudhsmv2");
const CloudSearch = require("aws-sdk/clients/cloudsearch");
const CloudSearchDomain = require("aws-sdk/clients/cloudsearchdomain");
const CloudTrail = require("aws-sdk/clients/cloudtrail");
const CloudWatch = require("aws-sdk/clients/cloudwatch");
const CloudWatchEvents = require("aws-sdk/clients/cloudwatchevents");
const CloudWatchLogs = require("aws-sdk/clients/cloudwatchlogs");
const CodeArtifact = require("aws-sdk/clients/codeartifact");
const CodeBuild = require("aws-sdk/clients/codebuild");
const CodeCommit = require("aws-sdk/clients/codecommit");
const CodeDeploy = require("aws-sdk/clients/codedeploy");
const CodeGuruProfiler = require("aws-sdk/clients/codeguruprofiler");
const CodeGuruReviewer = require("aws-sdk/clients/codegurureviewer");
const CodePipeline = require("aws-sdk/clients/codepipeline");
const CodeStar = require("aws-sdk/clients/codestar");
const CodeStarNotifications = require("aws-sdk/clients/codestarnotifications");
const CodeStarconnections = require("aws-sdk/clients/codestarconnections");
const CognitoIdentity = require("aws-sdk/clients/cognitoidentity");
const CognitoIdentityServiceProvider = require("aws-sdk/clients/cognitoidentityserviceprovider");
const CognitoSync = require("aws-sdk/clients/cognitosync");
const Comprehend = require("aws-sdk/clients/comprehend");
const ComprehendMedical = require("aws-sdk/clients/comprehendmedical");
const ComputeOptimizer = require("aws-sdk/clients/computeoptimizer");
const ConfigService = require("aws-sdk/clients/configservice");
const Connect = require("aws-sdk/clients/connect");
const ConnectContactLens = require("aws-sdk/clients/connectcontactlens");
const ConnectParticipant = require("aws-sdk/clients/connectparticipant");
const CostExplorer = require("aws-sdk/clients/costexplorer");
const CustomerProfiles = require("aws-sdk/clients/customerprofiles");
const DAX = require("aws-sdk/clients/dax");
const DLM = require("aws-sdk/clients/dlm");
const DMS = require("aws-sdk/clients/dms");
const DataBrew = require("aws-sdk/clients/databrew");
const DataExchange = require("aws-sdk/clients/dataexchange");
const DataPipeline = require("aws-sdk/clients/datapipeline");
const DataSync = require("aws-sdk/clients/datasync");
const Detective = require("aws-sdk/clients/detective");
const DevOpsGuru = require("aws-sdk/clients/devopsguru");
const DeviceFarm = require("aws-sdk/clients/devicefarm");
const DirectConnect = require("aws-sdk/clients/directconnect");
const DirectoryService = require("aws-sdk/clients/directoryservice");
const Discovery = require("aws-sdk/clients/discovery");
const DocDB = require("aws-sdk/clients/docdb");
const Drs = require("aws-sdk/clients/drs");
const DynamoDB = require("aws-sdk/clients/dynamodb");
const DynamoDBStreams = require("aws-sdk/clients/dynamodbstreams");
const EBS = require("aws-sdk/clients/ebs");
const EC2 = require("aws-sdk/clients/ec2");
const EC2InstanceConnect = require("aws-sdk/clients/ec2instanceconnect");
const ECR = require("aws-sdk/clients/ecr");
const ECRPUBLIC = require("aws-sdk/clients/ecrpublic");
const ECS = require("aws-sdk/clients/ecs");
const EFS = require("aws-sdk/clients/efs");
const EKS = require("aws-sdk/clients/eks");
const ELB = require("aws-sdk/clients/elb");
const ELBv2 = require("aws-sdk/clients/elbv2");
const EMR = require("aws-sdk/clients/emr");
const EMRcontainers = require("aws-sdk/clients/emrcontainers");
const ES = require("aws-sdk/clients/es");
const ElastiCache = require("aws-sdk/clients/elasticache");
const ElasticBeanstalk = require("aws-sdk/clients/elasticbeanstalk");
const ElasticInference = require("aws-sdk/clients/elasticinference");
const ElasticTranscoder = require("aws-sdk/clients/elastictranscoder");
const EventBridge = require("aws-sdk/clients/eventbridge");
const Evidently = require("aws-sdk/clients/evidently");
const FMS = require("aws-sdk/clients/fms");
const FSx = require("aws-sdk/clients/fsx");
const Finspace = require("aws-sdk/clients/finspace");
const Finspacedata = require("aws-sdk/clients/finspacedata");
const Firehose = require("aws-sdk/clients/firehose");
const Fis = require("aws-sdk/clients/fis");
const ForecastQueryService = require("aws-sdk/clients/forecastqueryservice");
const ForecastService = require("aws-sdk/clients/forecastservice");
const FraudDetector = require("aws-sdk/clients/frauddetector");
const GameLift = require("aws-sdk/clients/gamelift");
const Glacier = require("aws-sdk/clients/glacier");
const GlobalAccelerator = require("aws-sdk/clients/globalaccelerator");
const Glue = require("aws-sdk/clients/glue");
const Grafana = require("aws-sdk/clients/grafana");
const Greengrass = require("aws-sdk/clients/greengrass");
const GreengrassV2 = require("aws-sdk/clients/greengrassv2");
const GroundStation = require("aws-sdk/clients/groundstation");
const GuardDuty = require("aws-sdk/clients/guardduty");
const Health = require("aws-sdk/clients/health");
const HealthLake = require("aws-sdk/clients/healthlake");
const Honeycode = require("aws-sdk/clients/honeycode");
const IAM = require("aws-sdk/clients/iam");
const IVS = require("aws-sdk/clients/ivs");
const IdentityStore = require("aws-sdk/clients/identitystore");
const Imagebuilder = require("aws-sdk/clients/imagebuilder");
const Inspector = require("aws-sdk/clients/inspector");
const Inspector2 = require("aws-sdk/clients/inspector2");
const IoT1ClickDevicesService = require("aws-sdk/clients/iot1clickdevicesservice");
const IoT1ClickProjects = require("aws-sdk/clients/iot1clickprojects");
const IoTAnalytics = require("aws-sdk/clients/iotanalytics");
const IoTEvents = require("aws-sdk/clients/iotevents");
const IoTEventsData = require("aws-sdk/clients/ioteventsdata");
const IoTFleetHub = require("aws-sdk/clients/iotfleethub");
const IoTJobsDataPlane = require("aws-sdk/clients/iotjobsdataplane");
const IoTSecureTunneling = require("aws-sdk/clients/iotsecuretunneling");
const IoTSiteWise = require("aws-sdk/clients/iotsitewise");
const IoTThingsGraph = require("aws-sdk/clients/iotthingsgraph");
const IoTTwinMaker = require("aws-sdk/clients/iottwinmaker");
const IoTWireless = require("aws-sdk/clients/iotwireless");
const Iot = require("aws-sdk/clients/iot");
const IotData = require("aws-sdk/clients/iotdata");
const IotDeviceAdvisor = require("aws-sdk/clients/iotdeviceadvisor");
const KMS = require("aws-sdk/clients/kms");
const Kafka = require("aws-sdk/clients/kafka");
const KafkaConnect = require("aws-sdk/clients/kafkaconnect");
const Kendra = require("aws-sdk/clients/kendra");
const Kinesis = require("aws-sdk/clients/kinesis");
const KinesisAnalytics = require("aws-sdk/clients/kinesisanalytics");
const KinesisAnalyticsV2 = require("aws-sdk/clients/kinesisanalyticsv2");
const KinesisVideo = require("aws-sdk/clients/kinesisvideo");
const KinesisVideoArchivedMedia = require("aws-sdk/clients/kinesisvideoarchivedmedia");
const KinesisVideoMedia = require("aws-sdk/clients/kinesisvideomedia");
const KinesisVideoSignalingChannels = require("aws-sdk/clients/kinesisvideosignalingchannels");
const LakeFormation = require("aws-sdk/clients/lakeformation");
const Lambda = require("aws-sdk/clients/lambda");
const LexModelBuildingService = require("aws-sdk/clients/lexmodelbuildingservice");
const LexModelsV2 = require("aws-sdk/clients/lexmodelsv2");
const LexRuntime = require("aws-sdk/clients/lexruntime");
const LexRuntimeV2 = require("aws-sdk/clients/lexruntimev2");
const LicenseManager = require("aws-sdk/clients/licensemanager");
const Lightsail = require("aws-sdk/clients/lightsail");
const Location = require("aws-sdk/clients/location");
const LookoutEquipment = require("aws-sdk/clients/lookoutequipment");
const LookoutMetrics = require("aws-sdk/clients/lookoutmetrics");
const LookoutVision = require("aws-sdk/clients/lookoutvision");
const MQ = require("aws-sdk/clients/mq");
const MTurk = require("aws-sdk/clients/mturk");
const MWAA = require("aws-sdk/clients/mwaa");
const MachineLearning = require("aws-sdk/clients/machinelearning");
const Macie = require("aws-sdk/clients/macie");
const Macie2 = require("aws-sdk/clients/macie2");
const ManagedBlockchain = require("aws-sdk/clients/managedblockchain");
const MarketplaceCatalog = require("aws-sdk/clients/marketplacecatalog");
const MarketplaceCommerceAnalytics = require("aws-sdk/clients/marketplacecommerceanalytics");
const MarketplaceEntitlementService = require("aws-sdk/clients/marketplaceentitlementservice");
const MarketplaceMetering = require("aws-sdk/clients/marketplacemetering");
const MediaConnect = require("aws-sdk/clients/mediaconnect");
const MediaConvert = require("aws-sdk/clients/mediaconvert");
const MediaLive = require("aws-sdk/clients/medialive");
const MediaPackage = require("aws-sdk/clients/mediapackage");
const MediaPackageVod = require("aws-sdk/clients/mediapackagevod");
const MediaStore = require("aws-sdk/clients/mediastore");
const MediaStoreData = require("aws-sdk/clients/mediastoredata");
const MediaTailor = require("aws-sdk/clients/mediatailor");
const MemoryDB = require("aws-sdk/clients/memorydb");
const Mgn = require("aws-sdk/clients/mgn");
const MigrationHub = require("aws-sdk/clients/migrationhub");
const MigrationHubConfig = require("aws-sdk/clients/migrationhubconfig");
const MigrationHubRefactorSpaces = require("aws-sdk/clients/migrationhubrefactorspaces");
const MigrationHubStrategy = require("aws-sdk/clients/migrationhubstrategy");
const Mobile = require("aws-sdk/clients/mobile");
const Neptune = require("aws-sdk/clients/neptune");
const NetworkFirewall = require("aws-sdk/clients/networkfirewall");
const NetworkManager = require("aws-sdk/clients/networkmanager");
const Nimble = require("aws-sdk/clients/nimble");
const OpenSearch = require("aws-sdk/clients/opensearch");
const OpsWorks = require("aws-sdk/clients/opsworks");
const OpsWorksCM = require("aws-sdk/clients/opsworkscm");
const Organizations = require("aws-sdk/clients/organizations");
const Outposts = require("aws-sdk/clients/outposts");
const PI = require("aws-sdk/clients/pi");
const Panorama = require("aws-sdk/clients/panorama");
const Personalize = require("aws-sdk/clients/personalize");
const PersonalizeEvents = require("aws-sdk/clients/personalizeevents");
const PersonalizeRuntime = require("aws-sdk/clients/personalizeruntime");
const Pinpoint = require("aws-sdk/clients/pinpoint");
const PinpointEmail = require("aws-sdk/clients/pinpointemail");
const PinpointSMSVoice = require("aws-sdk/clients/pinpointsmsvoice");
const Polly = require("aws-sdk/clients/polly");
const Pricing = require("aws-sdk/clients/pricing");
const Proton = require("aws-sdk/clients/proton");
const QLDB = require("aws-sdk/clients/qldb");
const QLDBSession = require("aws-sdk/clients/qldbsession");
const QuickSight = require("aws-sdk/clients/quicksight");
const RAM = require("aws-sdk/clients/ram");
const RDS = require("aws-sdk/clients/rds");
const RDSDataService = require("aws-sdk/clients/rdsdataservice");
const RUM = require("aws-sdk/clients/rum");
const Rbin = require("aws-sdk/clients/rbin");
const Redshift = require("aws-sdk/clients/redshift");
const RedshiftData = require("aws-sdk/clients/redshiftdata");
const Rekognition = require("aws-sdk/clients/rekognition");
const Resiliencehub = require("aws-sdk/clients/resiliencehub");
const ResourceGroups = require("aws-sdk/clients/resourcegroups");
const ResourceGroupsTaggingAPI = require("aws-sdk/clients/resourcegroupstaggingapi");
const RoboMaker = require("aws-sdk/clients/robomaker");
const Route53 = require("aws-sdk/clients/route53");
const Route53Domains = require("aws-sdk/clients/route53domains");
const Route53RecoveryCluster = require("aws-sdk/clients/route53recoverycluster");
const Route53RecoveryControlConfig = require("aws-sdk/clients/route53recoverycontrolconfig");
const Route53RecoveryReadiness = require("aws-sdk/clients/route53recoveryreadiness");
const Route53Resolver = require("aws-sdk/clients/route53resolver");
const S3 = require("aws-sdk/clients/s3");
const S3Control = require("aws-sdk/clients/s3control");
const S3Outposts = require("aws-sdk/clients/s3outposts");
const SES = require("aws-sdk/clients/ses");
const SESV2 = require("aws-sdk/clients/sesv2");
const SMS = require("aws-sdk/clients/sms");
const SNS = require("aws-sdk/clients/sns");
const SQS = require("aws-sdk/clients/sqs");
const SSM = require("aws-sdk/clients/ssm");
const SSMContacts = require("aws-sdk/clients/ssmcontacts");
const SSMIncidents = require("aws-sdk/clients/ssmincidents");
const SSO = require("aws-sdk/clients/sso");
const SSOAdmin = require("aws-sdk/clients/ssoadmin");
const SSOOIDC = require("aws-sdk/clients/ssooidc");
const STS = require("aws-sdk/clients/sts");
const SWF = require("aws-sdk/clients/swf");
const SageMaker = require("aws-sdk/clients/sagemaker");
const SageMakerFeatureStoreRuntime = require("aws-sdk/clients/sagemakerfeaturestoreruntime");
const SageMakerRuntime = require("aws-sdk/clients/sagemakerruntime");
const SagemakerEdge = require("aws-sdk/clients/sagemakeredge");
const SavingsPlans = require("aws-sdk/clients/savingsplans");
const Schemas = require("aws-sdk/clients/schemas");
const SecretsManager = require("aws-sdk/clients/secretsmanager");
const SecurityHub = require("aws-sdk/clients/securityhub");
const ServerlessApplicationRepository = require("aws-sdk/clients/serverlessapplicationrepository");
const ServiceCatalog = require("aws-sdk/clients/servicecatalog");
const ServiceCatalogAppRegistry = require("aws-sdk/clients/servicecatalogappregistry");
const ServiceDiscovery = require("aws-sdk/clients/servicediscovery");
const ServiceQuotas = require("aws-sdk/clients/servicequotas");
const Shield = require("aws-sdk/clients/shield");
const Signer = require("aws-sdk/clients/signer");
const SnowDeviceManagement = require("aws-sdk/clients/snowdevicemanagement");
const Snowball = require("aws-sdk/clients/snowball");
const StepFunctions = require("aws-sdk/clients/stepfunctions");
const StorageGateway = require("aws-sdk/clients/storagegateway");
const Support = require("aws-sdk/clients/support");
const Synthetics = require("aws-sdk/clients/synthetics");
const Textract = require("aws-sdk/clients/textract");
const TimestreamQuery = require("aws-sdk/clients/timestreamquery");
const TimestreamWrite = require("aws-sdk/clients/timestreamwrite");
const TranscribeService = require("aws-sdk/clients/transcribeservice");
const Transfer = require("aws-sdk/clients/transfer");
const Translate = require("aws-sdk/clients/translate");
const VoiceID = require("aws-sdk/clients/voiceid");
const WAF = require("aws-sdk/clients/waf");
const WAFRegional = require("aws-sdk/clients/wafregional");
const WAFV2 = require("aws-sdk/clients/wafv2");
const WellArchitected = require("aws-sdk/clients/wellarchitected");
const Wisdom = require("aws-sdk/clients/wisdom");
const WorkDocs = require("aws-sdk/clients/workdocs");
const WorkLink = require("aws-sdk/clients/worklink");
const WorkMail = require("aws-sdk/clients/workmail");
const WorkMailMessageFlow = require("aws-sdk/clients/workmailmessageflow");
const WorkSpaces = require("aws-sdk/clients/workspaces");
const WorkSpacesWeb = require("aws-sdk/clients/workspacesweb");
const XRay = require("aws-sdk/clients/xray");

new ACM();
new ACMPCA();
new APIGateway();
new AccessAnalyzer();
new Account();
new AlexaForBusiness();
new Amp();
new Amplify();
new AmplifyBackend();
new AmplifyUIBuilder();
new ApiGatewayManagementApi();
new ApiGatewayV2();
new AppConfig();
new AppConfigData();
new AppIntegrations();
new AppMesh();
new AppRunner();
new AppStream();
new AppSync();
new Appflow();
new ApplicationAutoScaling();
new ApplicationCostProfiler();
new ApplicationInsights();
new Athena();
new AuditManager();
new AugmentedAIRuntime();
new AutoScaling();
new AutoScalingPlans();
new Backup();
new BackupGateway();
new Batch();
new Braket();
new Budgets();
new CUR();
new Chime();
new ChimeSDKIdentity();
new ChimeSDKMeetings();
new ChimeSDKMessaging();
new Cloud9();
new CloudControl();
new CloudDirectory();
new CloudFormation();
new CloudFront();
new CloudHSM();
new CloudHSMV2();
new CloudSearch();
new CloudSearchDomain();
new CloudTrail();
new CloudWatch();
new CloudWatchEvents();
new CloudWatchLogs();
new CodeArtifact();
new CodeBuild();
new CodeCommit();
new CodeDeploy();
new CodeGuruProfiler();
new CodeGuruReviewer();
new CodePipeline();
new CodeStar();
new CodeStarNotifications();
new CodeStarconnections();
new CognitoIdentity();
new CognitoIdentityServiceProvider();
new CognitoSync();
new Comprehend();
new ComprehendMedical();
new ComputeOptimizer();
new ConfigService();
new Connect();
new ConnectContactLens();
new ConnectParticipant();
new CostExplorer();
new CustomerProfiles();
new DAX();
new DLM();
new DMS();
new DataBrew();
new DataExchange();
new DataPipeline();
new DataSync();
new Detective();
new DevOpsGuru();
new DeviceFarm();
new DirectConnect();
new DirectoryService();
new Discovery();
new DocDB();
new Drs();
new DynamoDB();
new DynamoDBStreams();
new EBS();
new EC2();
new EC2InstanceConnect();
new ECR();
new ECRPUBLIC();
new ECS();
new EFS();
new EKS();
new ELB();
new ELBv2();
new EMR();
new EMRcontainers();
new ES();
new ElastiCache();
new ElasticBeanstalk();
new ElasticInference();
new ElasticTranscoder();
new EventBridge();
new Evidently();
new FMS();
new FSx();
new Finspace();
new Finspacedata();
new Firehose();
new Fis();
new ForecastQueryService();
new ForecastService();
new FraudDetector();
new GameLift();
new Glacier();
new GlobalAccelerator();
new Glue();
new Grafana();
new Greengrass();
new GreengrassV2();
new GroundStation();
new GuardDuty();
new Health();
new HealthLake();
new Honeycode();
new IAM();
new IVS();
new IdentityStore();
new Imagebuilder();
new Inspector();
new Inspector2();
new IoT1ClickDevicesService();
new IoT1ClickProjects();
new IoTAnalytics();
new IoTEvents();
new IoTEventsData();
new IoTFleetHub();
new IoTJobsDataPlane();
new IoTSecureTunneling();
new IoTSiteWise();
new IoTThingsGraph();
new IoTTwinMaker();
new IoTWireless();
new Iot();
new IotData();
new IotDeviceAdvisor();
new KMS();
new Kafka();
new KafkaConnect();
new Kendra();
new Kinesis();
new KinesisAnalytics();
new KinesisAnalyticsV2();
new KinesisVideo();
new KinesisVideoArchivedMedia();
new KinesisVideoMedia();
new KinesisVideoSignalingChannels();
new LakeFormation();
new Lambda();
new LexModelBuildingService();
new LexModelsV2();
new LexRuntime();
new LexRuntimeV2();
new LicenseManager();
new Lightsail();
new Location();
new LookoutEquipment();
new LookoutMetrics();
new LookoutVision();
new MQ();
new MTurk();
new MWAA();
new MachineLearning();
new Macie();
new Macie2();
new ManagedBlockchain();
new MarketplaceCatalog();
new MarketplaceCommerceAnalytics();
new MarketplaceEntitlementService();
new MarketplaceMetering();
new MediaConnect();
new MediaConvert();
new MediaLive();
new MediaPackage();
new MediaPackageVod();
new MediaStore();
new MediaStoreData();
new MediaTailor();
new MemoryDB();
new Mgn();
new MigrationHub();
new MigrationHubConfig();
new MigrationHubRefactorSpaces();
new MigrationHubStrategy();
new Mobile();
new Neptune();
new NetworkFirewall();
new NetworkManager();
new Nimble();
new OpenSearch();
new OpsWorks();
new OpsWorksCM();
new Organizations();
new Outposts();
new PI();
new Panorama();
new Personalize();
new PersonalizeEvents();
new PersonalizeRuntime();
new Pinpoint();
new PinpointEmail();
new PinpointSMSVoice();
new Polly();
new Pricing();
new Proton();
new QLDB();
new QLDBSession();
new QuickSight();
new RAM();
new RDS();
new RDSDataService();
new RUM();
new Rbin();
new Redshift();
new RedshiftData();
new Rekognition();
new Resiliencehub();
new ResourceGroups();
new ResourceGroupsTaggingAPI();
new RoboMaker();
new Route53();
new Route53Domains();
new Route53RecoveryCluster();
new Route53RecoveryControlConfig();
new Route53RecoveryReadiness();
new Route53Resolver();
new S3();
new S3Control();
new S3Outposts();
new SES();
new SESV2();
new SMS();
new SNS();
new SQS();
new SSM();
new SSMContacts();
new SSMIncidents();
new SSO();
new SSOAdmin();
new SSOOIDC();
new STS();
new SWF();
new SageMaker();
new SageMakerFeatureStoreRuntime();
new SageMakerRuntime();
new SagemakerEdge();
new SavingsPlans();
new Schemas();
new SecretsManager();
new SecurityHub();
new ServerlessApplicationRepository();
new ServiceCatalog();
new ServiceCatalogAppRegistry();
new ServiceDiscovery();
new ServiceQuotas();
new Shield();
new Signer();
new SnowDeviceManagement();
new Snowball();
new StepFunctions();
new StorageGateway();
new Support();
new Synthetics();
new Textract();
new TimestreamQuery();
new TimestreamWrite();
new TranscribeService();
new Transfer();
new Translate();
new VoiceID();
new WAF();
new WAFRegional();
new WAFV2();
new WellArchitected();
new Wisdom();
new WorkDocs();
new WorkLink();
new WorkMail();
new WorkMailMessageFlow();
new WorkSpaces();
new WorkSpacesWeb();
new XRay();
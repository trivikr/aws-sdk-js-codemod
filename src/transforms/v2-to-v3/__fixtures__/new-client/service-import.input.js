// This file is generated by scripts/generateNewClientTests/index.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.
"use strict";
import ACM from "aws-sdk/clients/acm";
import ACMPCA from "aws-sdk/clients/acmpca";
import APIGateway from "aws-sdk/clients/apigateway";
import ARCZonalShift from "aws-sdk/clients/arczonalshift";
import AccessAnalyzer from "aws-sdk/clients/accessanalyzer";
import Account from "aws-sdk/clients/account";
import AlexaForBusiness from "aws-sdk/clients/alexaforbusiness";
import Amp from "aws-sdk/clients/amp";
import Amplify from "aws-sdk/clients/amplify";
import AmplifyBackend from "aws-sdk/clients/amplifybackend";
import AmplifyUIBuilder from "aws-sdk/clients/amplifyuibuilder";
import ApiGatewayManagementApi from "aws-sdk/clients/apigatewaymanagementapi";
import ApiGatewayV2 from "aws-sdk/clients/apigatewayv2";
import AppConfig from "aws-sdk/clients/appconfig";
import AppConfigData from "aws-sdk/clients/appconfigdata";
import AppIntegrations from "aws-sdk/clients/appintegrations";
import AppMesh from "aws-sdk/clients/appmesh";
import AppRunner from "aws-sdk/clients/apprunner";
import AppStream from "aws-sdk/clients/appstream";
import AppSync from "aws-sdk/clients/appsync";
import Appflow from "aws-sdk/clients/appflow";
import ApplicationAutoScaling from "aws-sdk/clients/applicationautoscaling";
import ApplicationCostProfiler from "aws-sdk/clients/applicationcostprofiler";
import ApplicationInsights from "aws-sdk/clients/applicationinsights";
import Athena from "aws-sdk/clients/athena";
import AuditManager from "aws-sdk/clients/auditmanager";
import AugmentedAIRuntime from "aws-sdk/clients/augmentedairuntime";
import AutoScaling from "aws-sdk/clients/autoscaling";
import AutoScalingPlans from "aws-sdk/clients/autoscalingplans";
import Backup from "aws-sdk/clients/backup";
import BackupGateway from "aws-sdk/clients/backupgateway";
import BackupStorage from "aws-sdk/clients/backupstorage";
import Batch from "aws-sdk/clients/batch";
import Billingconductor from "aws-sdk/clients/billingconductor";
import Braket from "aws-sdk/clients/braket";
import Budgets from "aws-sdk/clients/budgets";
import CUR from "aws-sdk/clients/cur";
import Chime from "aws-sdk/clients/chime";
import ChimeSDKIdentity from "aws-sdk/clients/chimesdkidentity";
import ChimeSDKMediaPipelines from "aws-sdk/clients/chimesdkmediapipelines";
import ChimeSDKMeetings from "aws-sdk/clients/chimesdkmeetings";
import ChimeSDKMessaging from "aws-sdk/clients/chimesdkmessaging";
import ChimeSDKVoice from "aws-sdk/clients/chimesdkvoice";
import Cloud9 from "aws-sdk/clients/cloud9";
import CloudControl from "aws-sdk/clients/cloudcontrol";
import CloudDirectory from "aws-sdk/clients/clouddirectory";
import CloudFormation from "aws-sdk/clients/cloudformation";
import CloudFront from "aws-sdk/clients/cloudfront";
import CloudHSM from "aws-sdk/clients/cloudhsm";
import CloudHSMV2 from "aws-sdk/clients/cloudhsmv2";
import CloudSearch from "aws-sdk/clients/cloudsearch";
import CloudSearchDomain from "aws-sdk/clients/cloudsearchdomain";
import CloudTrail from "aws-sdk/clients/cloudtrail";
import CloudWatch from "aws-sdk/clients/cloudwatch";
import CloudWatchEvents from "aws-sdk/clients/cloudwatchevents";
import CloudWatchLogs from "aws-sdk/clients/cloudwatchlogs";
import CodeArtifact from "aws-sdk/clients/codeartifact";
import CodeBuild from "aws-sdk/clients/codebuild";
import CodeCatalyst from "aws-sdk/clients/codecatalyst";
import CodeCommit from "aws-sdk/clients/codecommit";
import CodeDeploy from "aws-sdk/clients/codedeploy";
import CodeGuruProfiler from "aws-sdk/clients/codeguruprofiler";
import CodeGuruReviewer from "aws-sdk/clients/codegurureviewer";
import CodePipeline from "aws-sdk/clients/codepipeline";
import CodeStar from "aws-sdk/clients/codestar";
import CodeStarNotifications from "aws-sdk/clients/codestarnotifications";
import CodeStarconnections from "aws-sdk/clients/codestarconnections";
import CognitoIdentity from "aws-sdk/clients/cognitoidentity";
import CognitoIdentityServiceProvider from "aws-sdk/clients/cognitoidentityserviceprovider";
import CognitoSync from "aws-sdk/clients/cognitosync";
import Comprehend from "aws-sdk/clients/comprehend";
import ComprehendMedical from "aws-sdk/clients/comprehendmedical";
import ComputeOptimizer from "aws-sdk/clients/computeoptimizer";
import ConfigService from "aws-sdk/clients/configservice";
import Connect from "aws-sdk/clients/connect";
import ConnectCampaigns from "aws-sdk/clients/connectcampaigns";
import ConnectCases from "aws-sdk/clients/connectcases";
import ConnectContactLens from "aws-sdk/clients/connectcontactlens";
import ConnectParticipant from "aws-sdk/clients/connectparticipant";
import ControlTower from "aws-sdk/clients/controltower";
import CostExplorer from "aws-sdk/clients/costexplorer";
import CustomerProfiles from "aws-sdk/clients/customerprofiles";
import DAX from "aws-sdk/clients/dax";
import DLM from "aws-sdk/clients/dlm";
import DMS from "aws-sdk/clients/dms";
import DataBrew from "aws-sdk/clients/databrew";
import DataExchange from "aws-sdk/clients/dataexchange";
import DataPipeline from "aws-sdk/clients/datapipeline";
import DataSync from "aws-sdk/clients/datasync";
import Detective from "aws-sdk/clients/detective";
import DevOpsGuru from "aws-sdk/clients/devopsguru";
import DeviceFarm from "aws-sdk/clients/devicefarm";
import DirectConnect from "aws-sdk/clients/directconnect";
import DirectoryService from "aws-sdk/clients/directoryservice";
import Discovery from "aws-sdk/clients/discovery";
import DocDB from "aws-sdk/clients/docdb";
import DocDBElastic from "aws-sdk/clients/docdbelastic";
import Drs from "aws-sdk/clients/drs";
import DynamoDB from "aws-sdk/clients/dynamodb";
import DynamoDBStreams from "aws-sdk/clients/dynamodbstreams";
import EBS from "aws-sdk/clients/ebs";
import EC2 from "aws-sdk/clients/ec2";
import EC2InstanceConnect from "aws-sdk/clients/ec2instanceconnect";
import ECR from "aws-sdk/clients/ecr";
import ECRPUBLIC from "aws-sdk/clients/ecrpublic";
import ECS from "aws-sdk/clients/ecs";
import EFS from "aws-sdk/clients/efs";
import EKS from "aws-sdk/clients/eks";
import ELB from "aws-sdk/clients/elb";
import ELBv2 from "aws-sdk/clients/elbv2";
import EMR from "aws-sdk/clients/emr";
import EMRServerless from "aws-sdk/clients/emrserverless";
import EMRcontainers from "aws-sdk/clients/emrcontainers";
import ES from "aws-sdk/clients/es";
import ElastiCache from "aws-sdk/clients/elasticache";
import ElasticBeanstalk from "aws-sdk/clients/elasticbeanstalk";
import ElasticInference from "aws-sdk/clients/elasticinference";
import ElasticTranscoder from "aws-sdk/clients/elastictranscoder";
import EventBridge from "aws-sdk/clients/eventbridge";
import Evidently from "aws-sdk/clients/evidently";
import FMS from "aws-sdk/clients/fms";
import FSx from "aws-sdk/clients/fsx";
import Finspace from "aws-sdk/clients/finspace";
import Finspacedata from "aws-sdk/clients/finspacedata";
import Firehose from "aws-sdk/clients/firehose";
import Fis from "aws-sdk/clients/fis";
import ForecastQueryService from "aws-sdk/clients/forecastqueryservice";
import ForecastService from "aws-sdk/clients/forecastservice";
import FraudDetector from "aws-sdk/clients/frauddetector";
import GameLift from "aws-sdk/clients/gamelift";
import GameSparks from "aws-sdk/clients/gamesparks";
import Glacier from "aws-sdk/clients/glacier";
import GlobalAccelerator from "aws-sdk/clients/globalaccelerator";
import Glue from "aws-sdk/clients/glue";
import Grafana from "aws-sdk/clients/grafana";
import Greengrass from "aws-sdk/clients/greengrass";
import GreengrassV2 from "aws-sdk/clients/greengrassv2";
import GroundStation from "aws-sdk/clients/groundstation";
import GuardDuty from "aws-sdk/clients/guardduty";
import Health from "aws-sdk/clients/health";
import HealthLake from "aws-sdk/clients/healthlake";
import Honeycode from "aws-sdk/clients/honeycode";
import IAM from "aws-sdk/clients/iam";
import IVS from "aws-sdk/clients/ivs";
import IdentityStore from "aws-sdk/clients/identitystore";
import Imagebuilder from "aws-sdk/clients/imagebuilder";
import Inspector from "aws-sdk/clients/inspector";
import Inspector2 from "aws-sdk/clients/inspector2";
import IoT1ClickDevicesService from "aws-sdk/clients/iot1clickdevicesservice";
import IoT1ClickProjects from "aws-sdk/clients/iot1clickprojects";
import IoTAnalytics from "aws-sdk/clients/iotanalytics";
import IoTEvents from "aws-sdk/clients/iotevents";
import IoTEventsData from "aws-sdk/clients/ioteventsdata";
import IoTFleetHub from "aws-sdk/clients/iotfleethub";
import IoTFleetWise from "aws-sdk/clients/iotfleetwise";
import IoTJobsDataPlane from "aws-sdk/clients/iotjobsdataplane";
import IoTRoboRunner from "aws-sdk/clients/iotroborunner";
import IoTSecureTunneling from "aws-sdk/clients/iotsecuretunneling";
import IoTSiteWise from "aws-sdk/clients/iotsitewise";
import IoTThingsGraph from "aws-sdk/clients/iotthingsgraph";
import IoTTwinMaker from "aws-sdk/clients/iottwinmaker";
import IoTWireless from "aws-sdk/clients/iotwireless";
import Iot from "aws-sdk/clients/iot";
import IotData from "aws-sdk/clients/iotdata";
import IotDeviceAdvisor from "aws-sdk/clients/iotdeviceadvisor";
import Ivschat from "aws-sdk/clients/ivschat";
import KMS from "aws-sdk/clients/kms";
import Kafka from "aws-sdk/clients/kafka";
import KafkaConnect from "aws-sdk/clients/kafkaconnect";
import Kendra from "aws-sdk/clients/kendra";
import Keyspaces from "aws-sdk/clients/keyspaces";
import Kinesis from "aws-sdk/clients/kinesis";
import KinesisAnalytics from "aws-sdk/clients/kinesisanalytics";
import KinesisAnalyticsV2 from "aws-sdk/clients/kinesisanalyticsv2";
import KinesisVideo from "aws-sdk/clients/kinesisvideo";
import KinesisVideoArchivedMedia from "aws-sdk/clients/kinesisvideoarchivedmedia";
import KinesisVideoMedia from "aws-sdk/clients/kinesisvideomedia";
import KinesisVideoSignalingChannels from "aws-sdk/clients/kinesisvideosignalingchannels";
import KinesisVideoWebRTCStorage from "aws-sdk/clients/kinesisvideowebrtcstorage";
import LakeFormation from "aws-sdk/clients/lakeformation";
import Lambda from "aws-sdk/clients/lambda";
import LexModelBuildingService from "aws-sdk/clients/lexmodelbuildingservice";
import LexModelsV2 from "aws-sdk/clients/lexmodelsv2";
import LexRuntime from "aws-sdk/clients/lexruntime";
import LexRuntimeV2 from "aws-sdk/clients/lexruntimev2";
import LicenseManager from "aws-sdk/clients/licensemanager";
import LicenseManagerLinuxSubscriptions from "aws-sdk/clients/licensemanagerlinuxsubscriptions";
import LicenseManagerUserSubscriptions from "aws-sdk/clients/licensemanagerusersubscriptions";
import Lightsail from "aws-sdk/clients/lightsail";
import Location from "aws-sdk/clients/location";
import LookoutEquipment from "aws-sdk/clients/lookoutequipment";
import LookoutMetrics from "aws-sdk/clients/lookoutmetrics";
import LookoutVision from "aws-sdk/clients/lookoutvision";
import M2 from "aws-sdk/clients/m2";
import MQ from "aws-sdk/clients/mq";
import MTurk from "aws-sdk/clients/mturk";
import MWAA from "aws-sdk/clients/mwaa";
import MachineLearning from "aws-sdk/clients/machinelearning";
import Macie from "aws-sdk/clients/macie";
import Macie2 from "aws-sdk/clients/macie2";
import ManagedBlockchain from "aws-sdk/clients/managedblockchain";
import MarketplaceCatalog from "aws-sdk/clients/marketplacecatalog";
import MarketplaceCommerceAnalytics from "aws-sdk/clients/marketplacecommerceanalytics";
import MarketplaceEntitlementService from "aws-sdk/clients/marketplaceentitlementservice";
import MarketplaceMetering from "aws-sdk/clients/marketplacemetering";
import MediaConnect from "aws-sdk/clients/mediaconnect";
import MediaConvert from "aws-sdk/clients/mediaconvert";
import MediaLive from "aws-sdk/clients/medialive";
import MediaPackage from "aws-sdk/clients/mediapackage";
import MediaPackageVod from "aws-sdk/clients/mediapackagevod";
import MediaStore from "aws-sdk/clients/mediastore";
import MediaStoreData from "aws-sdk/clients/mediastoredata";
import MediaTailor from "aws-sdk/clients/mediatailor";
import MemoryDB from "aws-sdk/clients/memorydb";
import Mgn from "aws-sdk/clients/mgn";
import MigrationHub from "aws-sdk/clients/migrationhub";
import MigrationHubConfig from "aws-sdk/clients/migrationhubconfig";
import MigrationHubOrchestrator from "aws-sdk/clients/migrationhuborchestrator";
import MigrationHubRefactorSpaces from "aws-sdk/clients/migrationhubrefactorspaces";
import MigrationHubStrategy from "aws-sdk/clients/migrationhubstrategy";
import Mobile from "aws-sdk/clients/mobile";
import Neptune from "aws-sdk/clients/neptune";
import NetworkFirewall from "aws-sdk/clients/networkfirewall";
import NetworkManager from "aws-sdk/clients/networkmanager";
import Nimble from "aws-sdk/clients/nimble";
import OAM from "aws-sdk/clients/oam";
import Omics from "aws-sdk/clients/omics";
import OpenSearch from "aws-sdk/clients/opensearch";
import OpenSearchServerless from "aws-sdk/clients/opensearchserverless";
import OpsWorks from "aws-sdk/clients/opsworks";
import OpsWorksCM from "aws-sdk/clients/opsworkscm";
import Organizations from "aws-sdk/clients/organizations";
import Outposts from "aws-sdk/clients/outposts";
import PI from "aws-sdk/clients/pi";
import Panorama from "aws-sdk/clients/panorama";
import Personalize from "aws-sdk/clients/personalize";
import PersonalizeEvents from "aws-sdk/clients/personalizeevents";
import PersonalizeRuntime from "aws-sdk/clients/personalizeruntime";
import Pinpoint from "aws-sdk/clients/pinpoint";
import PinpointEmail from "aws-sdk/clients/pinpointemail";
import PinpointSMSVoice from "aws-sdk/clients/pinpointsmsvoice";
import PinpointSMSVoiceV2 from "aws-sdk/clients/pinpointsmsvoicev2";
import Pipes from "aws-sdk/clients/pipes";
import Polly from "aws-sdk/clients/polly";
import Pricing from "aws-sdk/clients/pricing";
import PrivateNetworks from "aws-sdk/clients/privatenetworks";
import Proton from "aws-sdk/clients/proton";
import QLDB from "aws-sdk/clients/qldb";
import QLDBSession from "aws-sdk/clients/qldbsession";
import QuickSight from "aws-sdk/clients/quicksight";
import RAM from "aws-sdk/clients/ram";
import RDS from "aws-sdk/clients/rds";
import RDSDataService from "aws-sdk/clients/rdsdataservice";
import RUM from "aws-sdk/clients/rum";
import Rbin from "aws-sdk/clients/rbin";
import Redshift from "aws-sdk/clients/redshift";
import RedshiftData from "aws-sdk/clients/redshiftdata";
import RedshiftServerless from "aws-sdk/clients/redshiftserverless";
import Rekognition from "aws-sdk/clients/rekognition";
import Resiliencehub from "aws-sdk/clients/resiliencehub";
import ResourceExplorer2 from "aws-sdk/clients/resourceexplorer2";
import ResourceGroups from "aws-sdk/clients/resourcegroups";
import ResourceGroupsTaggingAPI from "aws-sdk/clients/resourcegroupstaggingapi";
import RoboMaker from "aws-sdk/clients/robomaker";
import RolesAnywhere from "aws-sdk/clients/rolesanywhere";
import Route53 from "aws-sdk/clients/route53";
import Route53Domains from "aws-sdk/clients/route53domains";
import Route53RecoveryCluster from "aws-sdk/clients/route53recoverycluster";
import Route53RecoveryControlConfig from "aws-sdk/clients/route53recoverycontrolconfig";
import Route53RecoveryReadiness from "aws-sdk/clients/route53recoveryreadiness";
import Route53Resolver from "aws-sdk/clients/route53resolver";
import S3 from "aws-sdk/clients/s3";
import S3Control from "aws-sdk/clients/s3control";
import S3Outposts from "aws-sdk/clients/s3outposts";
import SES from "aws-sdk/clients/ses";
import SESV2 from "aws-sdk/clients/sesv2";
import SMS from "aws-sdk/clients/sms";
import SNS from "aws-sdk/clients/sns";
import SQS from "aws-sdk/clients/sqs";
import SSM from "aws-sdk/clients/ssm";
import SSMContacts from "aws-sdk/clients/ssmcontacts";
import SSMIncidents from "aws-sdk/clients/ssmincidents";
import SSO from "aws-sdk/clients/sso";
import SSOAdmin from "aws-sdk/clients/ssoadmin";
import SSOOIDC from "aws-sdk/clients/ssooidc";
import STS from "aws-sdk/clients/sts";
import SWF from "aws-sdk/clients/swf";
import SageMaker from "aws-sdk/clients/sagemaker";
import SageMakerFeatureStoreRuntime from "aws-sdk/clients/sagemakerfeaturestoreruntime";
import SageMakerGeospatial from "aws-sdk/clients/sagemakergeospatial";
import SageMakerMetrics from "aws-sdk/clients/sagemakermetrics";
import SageMakerRuntime from "aws-sdk/clients/sagemakerruntime";
import SagemakerEdge from "aws-sdk/clients/sagemakeredge";
import SavingsPlans from "aws-sdk/clients/savingsplans";
import Scheduler from "aws-sdk/clients/scheduler";
import Schemas from "aws-sdk/clients/schemas";
import SecretsManager from "aws-sdk/clients/secretsmanager";
import SecurityHub from "aws-sdk/clients/securityhub";
import SecurityLake from "aws-sdk/clients/securitylake";
import ServerlessApplicationRepository from "aws-sdk/clients/serverlessapplicationrepository";
import ServiceCatalog from "aws-sdk/clients/servicecatalog";
import ServiceCatalogAppRegistry from "aws-sdk/clients/servicecatalogappregistry";
import ServiceDiscovery from "aws-sdk/clients/servicediscovery";
import ServiceQuotas from "aws-sdk/clients/servicequotas";
import Shield from "aws-sdk/clients/shield";
import Signer from "aws-sdk/clients/signer";
import SimSpaceWeaver from "aws-sdk/clients/simspaceweaver";
import SnowDeviceManagement from "aws-sdk/clients/snowdevicemanagement";
import Snowball from "aws-sdk/clients/snowball";
import SsmSap from "aws-sdk/clients/ssmsap";
import StepFunctions from "aws-sdk/clients/stepfunctions";
import StorageGateway from "aws-sdk/clients/storagegateway";
import Support from "aws-sdk/clients/support";
import SupportApp from "aws-sdk/clients/supportapp";
import Synthetics from "aws-sdk/clients/synthetics";
import Textract from "aws-sdk/clients/textract";
import TimestreamQuery from "aws-sdk/clients/timestreamquery";
import TimestreamWrite from "aws-sdk/clients/timestreamwrite";
import TranscribeService from "aws-sdk/clients/transcribeservice";
import Transfer from "aws-sdk/clients/transfer";
import Translate from "aws-sdk/clients/translate";
import VoiceID from "aws-sdk/clients/voiceid";
import WAF from "aws-sdk/clients/waf";
import WAFRegional from "aws-sdk/clients/wafregional";
import WAFV2 from "aws-sdk/clients/wafv2";
import WellArchitected from "aws-sdk/clients/wellarchitected";
import Wisdom from "aws-sdk/clients/wisdom";
import WorkDocs from "aws-sdk/clients/workdocs";
import WorkLink from "aws-sdk/clients/worklink";
import WorkMail from "aws-sdk/clients/workmail";
import WorkMailMessageFlow from "aws-sdk/clients/workmailmessageflow";
import WorkSpaces from "aws-sdk/clients/workspaces";
import WorkSpacesWeb from "aws-sdk/clients/workspacesweb";
import XRay from "aws-sdk/clients/xray";

new ACM();
new ACMPCA();
new APIGateway();
new ARCZonalShift();
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
new BackupStorage();
new Batch();
new Billingconductor();
new Braket();
new Budgets();
new CUR();
new Chime();
new ChimeSDKIdentity();
new ChimeSDKMediaPipelines();
new ChimeSDKMeetings();
new ChimeSDKMessaging();
new ChimeSDKVoice();
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
new CodeCatalyst();
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
new ConnectCampaigns();
new ConnectCases();
new ConnectContactLens();
new ConnectParticipant();
new ControlTower();
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
new DocDBElastic();
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
new EMRServerless();
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
new GameSparks();
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
new IoTFleetWise();
new IoTJobsDataPlane();
new IoTRoboRunner();
new IoTSecureTunneling();
new IoTSiteWise();
new IoTThingsGraph();
new IoTTwinMaker();
new IoTWireless();
new Iot();
new IotData();
new IotDeviceAdvisor();
new Ivschat();
new KMS();
new Kafka();
new KafkaConnect();
new Kendra();
new Keyspaces();
new Kinesis();
new KinesisAnalytics();
new KinesisAnalyticsV2();
new KinesisVideo();
new KinesisVideoArchivedMedia();
new KinesisVideoMedia();
new KinesisVideoSignalingChannels();
new KinesisVideoWebRTCStorage();
new LakeFormation();
new Lambda();
new LexModelBuildingService();
new LexModelsV2();
new LexRuntime();
new LexRuntimeV2();
new LicenseManager();
new LicenseManagerLinuxSubscriptions();
new LicenseManagerUserSubscriptions();
new Lightsail();
new Location();
new LookoutEquipment();
new LookoutMetrics();
new LookoutVision();
new M2();
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
new MigrationHubOrchestrator();
new MigrationHubRefactorSpaces();
new MigrationHubStrategy();
new Mobile();
new Neptune();
new NetworkFirewall();
new NetworkManager();
new Nimble();
new OAM();
new Omics();
new OpenSearch();
new OpenSearchServerless();
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
new PinpointSMSVoiceV2();
new Pipes();
new Polly();
new Pricing();
new PrivateNetworks();
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
new RedshiftServerless();
new Rekognition();
new Resiliencehub();
new ResourceExplorer2();
new ResourceGroups();
new ResourceGroupsTaggingAPI();
new RoboMaker();
new RolesAnywhere();
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
new SageMakerGeospatial();
new SageMakerMetrics();
new SageMakerRuntime();
new SagemakerEdge();
new SavingsPlans();
new Scheduler();
new Schemas();
new SecretsManager();
new SecurityHub();
new SecurityLake();
new ServerlessApplicationRepository();
new ServiceCatalog();
new ServiceCatalogAppRegistry();
new ServiceDiscovery();
new ServiceQuotas();
new Shield();
new Signer();
new SimSpaceWeaver();
new SnowDeviceManagement();
new Snowball();
new SsmSap();
new StepFunctions();
new StorageGateway();
new Support();
new SupportApp();
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

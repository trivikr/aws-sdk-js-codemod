// This file is generated by scripts/generateNewClientTests.ts
import { AccessAnalyzer } from "@aws-sdk/client-accessanalyzer";
import { Account } from "@aws-sdk/client-account";
import { ACM } from "@aws-sdk/client-acm";
import { ACMPCA } from "@aws-sdk/client-acm-pca";
import { AlexaForBusiness } from "@aws-sdk/client-alexa-for-business";
import { Amp } from "@aws-sdk/client-amp";
import { Amplify } from "@aws-sdk/client-amplify";
import { AmplifyBackend } from "@aws-sdk/client-amplifybackend";
import { AmplifyUIBuilder } from "@aws-sdk/client-amplifyuibuilder";
import { APIGateway } from "@aws-sdk/client-api-gateway";
import { ApiGatewayManagementApi } from "@aws-sdk/client-apigatewaymanagementapi";
import { ApiGatewayV2 } from "@aws-sdk/client-apigatewayv2";
import { AppMesh } from "@aws-sdk/client-app-mesh";
import { AppConfig } from "@aws-sdk/client-appconfig";
import { AppConfigData } from "@aws-sdk/client-appconfigdata";
import { Appflow } from "@aws-sdk/client-appflow";
import { AppIntegrations } from "@aws-sdk/client-appintegrations";
import { ApplicationAutoScaling } from "@aws-sdk/client-application-auto-scaling";
import { ApplicationDiscoveryService } from "@aws-sdk/client-application-discovery-service";
import { ApplicationInsights } from "@aws-sdk/client-application-insights";
import { ApplicationCostProfiler } from "@aws-sdk/client-applicationcostprofiler";
import { AppRunner } from "@aws-sdk/client-apprunner";
import { AppStream } from "@aws-sdk/client-appstream";
import { AppSync } from "@aws-sdk/client-appsync";
import { Athena } from "@aws-sdk/client-athena";
import { AuditManager } from "@aws-sdk/client-auditmanager";
import { AutoScaling } from "@aws-sdk/client-auto-scaling";
import { AutoScalingPlans } from "@aws-sdk/client-auto-scaling-plans";
import { Backup } from "@aws-sdk/client-backup";
import { BackupGateway } from "@aws-sdk/client-backup-gateway";
import { Batch } from "@aws-sdk/client-batch";
import { Braket } from "@aws-sdk/client-braket";
import { Budgets } from "@aws-sdk/client-budgets";
import { Chime } from "@aws-sdk/client-chime";
import { ChimeSDKIdentity } from "@aws-sdk/client-chime-sdk-identity";
import { ChimeSDKMeetings } from "@aws-sdk/client-chime-sdk-meetings";
import { ChimeSDKMessaging } from "@aws-sdk/client-chime-sdk-messaging";
import { Cloud9 } from "@aws-sdk/client-cloud9";
import { CloudControl } from "@aws-sdk/client-cloudcontrol";
import { CloudDirectory } from "@aws-sdk/client-clouddirectory";
import { CloudFormation } from "@aws-sdk/client-cloudformation";
import { CloudFront } from "@aws-sdk/client-cloudfront";
import { CloudHSM } from "@aws-sdk/client-cloudhsm";
import { CloudHSMV2 } from "@aws-sdk/client-cloudhsm-v2";
import { CloudSearch } from "@aws-sdk/client-cloudsearch";
import { CloudSearchDomain } from "@aws-sdk/client-cloudsearch-domain";
import { CloudTrail } from "@aws-sdk/client-cloudtrail";
import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { CloudWatchEvents } from "@aws-sdk/client-cloudwatch-events";
import { CloudWatchLogs } from "@aws-sdk/client-cloudwatch-logs";
import { Codeartifact } from "@aws-sdk/client-codeartifact";
import { CodeBuild } from "@aws-sdk/client-codebuild";
import { CodeCommit } from "@aws-sdk/client-codecommit";
import { CodeDeploy } from "@aws-sdk/client-codedeploy";
import { CodeGuruReviewer } from "@aws-sdk/client-codeguru-reviewer";
import { CodeGuruProfiler } from "@aws-sdk/client-codeguruprofiler";
import { CodePipeline } from "@aws-sdk/client-codepipeline";
import { CodeStar } from "@aws-sdk/client-codestar";
import { CodeStarConnections } from "@aws-sdk/client-codestar-connections";
import { CodestarNotifications } from "@aws-sdk/client-codestar-notifications";
import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoSync } from "@aws-sdk/client-cognito-sync";
import { Comprehend } from "@aws-sdk/client-comprehend";
import { ComprehendMedical } from "@aws-sdk/client-comprehendmedical";
import { ComputeOptimizer } from "@aws-sdk/client-compute-optimizer";
import { ConfigService } from "@aws-sdk/client-config-service";
import { Connect } from "@aws-sdk/client-connect";
import { ConnectContactLens } from "@aws-sdk/client-connect-contact-lens";
import { ConnectParticipant } from "@aws-sdk/client-connectparticipant";
import { CostAndUsageReportService } from "@aws-sdk/client-cost-and-usage-report-service";
import { CostExplorer } from "@aws-sdk/client-cost-explorer";
import { CustomerProfiles } from "@aws-sdk/client-customer-profiles";
import { DataPipeline } from "@aws-sdk/client-data-pipeline";
import { DatabaseMigrationService } from "@aws-sdk/client-database-migration-service";
import { DataBrew } from "@aws-sdk/client-databrew";
import { DataExchange } from "@aws-sdk/client-dataexchange";
import { DataSync } from "@aws-sdk/client-datasync";
import { DAX } from "@aws-sdk/client-dax";
import { Detective } from "@aws-sdk/client-detective";
import { DeviceFarm } from "@aws-sdk/client-device-farm";
import { DevOpsGuru } from "@aws-sdk/client-devops-guru";
import { DirectConnect } from "@aws-sdk/client-direct-connect";
import { DirectoryService } from "@aws-sdk/client-directory-service";
import { DLM } from "@aws-sdk/client-dlm";
import { DocDB } from "@aws-sdk/client-docdb";
import { Drs } from "@aws-sdk/client-drs";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { EBS } from "@aws-sdk/client-ebs";
import { EC2 } from "@aws-sdk/client-ec2";
import { EC2InstanceConnect } from "@aws-sdk/client-ec2-instance-connect";
import { ECR } from "@aws-sdk/client-ecr";
import { ECRPUBLIC } from "@aws-sdk/client-ecr-public";
import { ECS } from "@aws-sdk/client-ecs";
import { EFS } from "@aws-sdk/client-efs";
import { EKS } from "@aws-sdk/client-eks";
import { ElasticBeanstalk } from "@aws-sdk/client-elastic-beanstalk";
import { ElasticInference } from "@aws-sdk/client-elastic-inference";
import { ElasticLoadBalancing } from "@aws-sdk/client-elastic-load-balancing";
import { ElasticLoadBalancingV2 } from "@aws-sdk/client-elastic-load-balancing-v2";
import { ElasticTranscoder } from "@aws-sdk/client-elastic-transcoder";
import { ElastiCache } from "@aws-sdk/client-elasticache";
import { ElasticsearchService } from "@aws-sdk/client-elasticsearch-service";
import { EMR } from "@aws-sdk/client-emr";
import { EMRContainers } from "@aws-sdk/client-emr-containers";
import { EventBridge } from "@aws-sdk/client-eventbridge";
import { Evidently } from "@aws-sdk/client-evidently";
import { Finspace } from "@aws-sdk/client-finspace";
import { FinspaceData } from "@aws-sdk/client-finspace-data";
import { Firehose } from "@aws-sdk/client-firehose";
import { Fis } from "@aws-sdk/client-fis";
import { FMS } from "@aws-sdk/client-fms";
import { Forecast } from "@aws-sdk/client-forecast";
import { Forecastquery } from "@aws-sdk/client-forecastquery";
import { FraudDetector } from "@aws-sdk/client-frauddetector";
import { FSx } from "@aws-sdk/client-fsx";
import { GameLift } from "@aws-sdk/client-gamelift";
import { Glacier } from "@aws-sdk/client-glacier";
import { GlobalAccelerator } from "@aws-sdk/client-global-accelerator";
import { Glue } from "@aws-sdk/client-glue";
import { Grafana } from "@aws-sdk/client-grafana";
import { Greengrass } from "@aws-sdk/client-greengrass";
import { GreengrassV2 } from "@aws-sdk/client-greengrassv2";
import { GroundStation } from "@aws-sdk/client-groundstation";
import { GuardDuty } from "@aws-sdk/client-guardduty";
import { Health } from "@aws-sdk/client-health";
import { HealthLake } from "@aws-sdk/client-healthlake";
import { Honeycode } from "@aws-sdk/client-honeycode";
import { IAM } from "@aws-sdk/client-iam";
import { Identitystore } from "@aws-sdk/client-identitystore";
import { Imagebuilder } from "@aws-sdk/client-imagebuilder";
import { Inspector } from "@aws-sdk/client-inspector";
import { Inspector2 } from "@aws-sdk/client-inspector2";
import { IoT } from "@aws-sdk/client-iot";
import { IoT1ClickDevicesService } from "@aws-sdk/client-iot-1click-devices-service";
import { IoT1ClickProjects } from "@aws-sdk/client-iot-1click-projects";
import { IoTDataPlane } from "@aws-sdk/client-iot-data-plane";
import { IoTEvents } from "@aws-sdk/client-iot-events";
import { IoTEventsData } from "@aws-sdk/client-iot-events-data";
import { IoTJobsDataPlane } from "@aws-sdk/client-iot-jobs-data-plane";
import { IoTWireless } from "@aws-sdk/client-iot-wireless";
import { IoTAnalytics } from "@aws-sdk/client-iotanalytics";
import { IotDeviceAdvisor } from "@aws-sdk/client-iotdeviceadvisor";
import { IoTFleetHub } from "@aws-sdk/client-iotfleethub";
import { IoTSecureTunneling } from "@aws-sdk/client-iotsecuretunneling";
import { IoTSiteWise } from "@aws-sdk/client-iotsitewise";
import { IoTThingsGraph } from "@aws-sdk/client-iotthingsgraph";
import { IoTTwinMaker } from "@aws-sdk/client-iottwinmaker";
import { Ivs } from "@aws-sdk/client-ivs";
import { Kafka } from "@aws-sdk/client-kafka";
import { KafkaConnect } from "@aws-sdk/client-kafkaconnect";
import { Kendra } from "@aws-sdk/client-kendra";
import { Kinesis } from "@aws-sdk/client-kinesis";
import { KinesisAnalytics } from "@aws-sdk/client-kinesis-analytics";
import { KinesisAnalyticsV2 } from "@aws-sdk/client-kinesis-analytics-v2";
import { KinesisVideo } from "@aws-sdk/client-kinesis-video";
import { KinesisVideoArchivedMedia } from "@aws-sdk/client-kinesis-video-archived-media";
import { KinesisVideoMedia } from "@aws-sdk/client-kinesis-video-media";
import { KinesisVideoSignaling } from "@aws-sdk/client-kinesis-video-signaling";
import { KMS } from "@aws-sdk/client-kms";
import { LakeFormation } from "@aws-sdk/client-lakeformation";
import { Lambda } from "@aws-sdk/client-lambda";
import { LexModelBuildingService } from "@aws-sdk/client-lex-model-building-service";
import { LexModelsV2 } from "@aws-sdk/client-lex-models-v2";
import { LexRuntimeService } from "@aws-sdk/client-lex-runtime-service";
import { LexRuntimeV2 } from "@aws-sdk/client-lex-runtime-v2";
import { LicenseManager } from "@aws-sdk/client-license-manager";
import { Lightsail } from "@aws-sdk/client-lightsail";
import { Location } from "@aws-sdk/client-location";
import { LookoutEquipment } from "@aws-sdk/client-lookoutequipment";
import { LookoutMetrics } from "@aws-sdk/client-lookoutmetrics";
import { LookoutVision } from "@aws-sdk/client-lookoutvision";
import { MachineLearning } from "@aws-sdk/client-machine-learning";
import { Macie } from "@aws-sdk/client-macie";
import { Macie2 } from "@aws-sdk/client-macie2";
import { ManagedBlockchain } from "@aws-sdk/client-managedblockchain";
import { MarketplaceCatalog } from "@aws-sdk/client-marketplace-catalog";
import { MarketplaceCommerceAnalytics } from "@aws-sdk/client-marketplace-commerce-analytics";
import { MarketplaceEntitlementService } from "@aws-sdk/client-marketplace-entitlement-service";
import { MarketplaceMetering } from "@aws-sdk/client-marketplace-metering";
import { MediaConnect } from "@aws-sdk/client-mediaconnect";
import { MediaConvert } from "@aws-sdk/client-mediaconvert";
import { MediaLive } from "@aws-sdk/client-medialive";
import { MediaPackage } from "@aws-sdk/client-mediapackage";
import { MediaPackageVod } from "@aws-sdk/client-mediapackage-vod";
import { MediaStore } from "@aws-sdk/client-mediastore";
import { MediaStoreData } from "@aws-sdk/client-mediastore-data";
import { MediaTailor } from "@aws-sdk/client-mediatailor";
import { MemoryDB } from "@aws-sdk/client-memory-db";
import { Mgn } from "@aws-sdk/client-mgn";
import { MigrationHub } from "@aws-sdk/client-migration-hub";
import { MigrationHubRefactorSpaces } from "@aws-sdk/client-migration-hub-refactor-spaces";
import { MigrationHubConfig } from "@aws-sdk/client-migrationhub-config";
import { MigrationHubStrategy } from "@aws-sdk/client-migrationhubstrategy";
import { Mobile } from "@aws-sdk/client-mobile";
import { Mq } from "@aws-sdk/client-mq";
import { MTurk } from "@aws-sdk/client-mturk";
import { MWAA } from "@aws-sdk/client-mwaa";
import { Neptune } from "@aws-sdk/client-neptune";
import { NetworkFirewall } from "@aws-sdk/client-network-firewall";
import { NetworkManager } from "@aws-sdk/client-networkmanager";
import { Nimble } from "@aws-sdk/client-nimble";
import { OpenSearch } from "@aws-sdk/client-opensearch";
import { OpsWorks } from "@aws-sdk/client-opsworks";
import { OpsWorksCM } from "@aws-sdk/client-opsworkscm";
import { Organizations } from "@aws-sdk/client-organizations";
import { Outposts } from "@aws-sdk/client-outposts";
import { Panorama } from "@aws-sdk/client-panorama";
import { Personalize } from "@aws-sdk/client-personalize";
import { PersonalizeEvents } from "@aws-sdk/client-personalize-events";
import { PersonalizeRuntime } from "@aws-sdk/client-personalize-runtime";
import { PI } from "@aws-sdk/client-pi";
import { Pinpoint } from "@aws-sdk/client-pinpoint";
import { PinpointEmail } from "@aws-sdk/client-pinpoint-email";
import { PinpointSMSVoice } from "@aws-sdk/client-pinpoint-sms-voice";
import { Polly } from "@aws-sdk/client-polly";
import { Pricing } from "@aws-sdk/client-pricing";
import { Proton } from "@aws-sdk/client-proton";
import { QLDB } from "@aws-sdk/client-qldb";
import { QLDBSession } from "@aws-sdk/client-qldb-session";
import { QuickSight } from "@aws-sdk/client-quicksight";
import { RAM } from "@aws-sdk/client-ram";
import { Rbin } from "@aws-sdk/client-rbin";
import { RDS } from "@aws-sdk/client-rds";
import { RDSData } from "@aws-sdk/client-rds-data";
import { Redshift } from "@aws-sdk/client-redshift";
import { RedshiftData } from "@aws-sdk/client-redshift-data";
import { Rekognition } from "@aws-sdk/client-rekognition";
import { Resiliencehub } from "@aws-sdk/client-resiliencehub";
import { ResourceGroups } from "@aws-sdk/client-resource-groups";
import { ResourceGroupsTaggingAPI } from "@aws-sdk/client-resource-groups-tagging-api";
import { RoboMaker } from "@aws-sdk/client-robomaker";
import { Route53 } from "@aws-sdk/client-route-53";
import { Route53Domains } from "@aws-sdk/client-route-53-domains";
import { Route53RecoveryCluster } from "@aws-sdk/client-route53-recovery-cluster";
import { Route53RecoveryControlConfig } from "@aws-sdk/client-route53-recovery-control-config";
import { Route53RecoveryReadiness } from "@aws-sdk/client-route53-recovery-readiness";
import { Route53Resolver } from "@aws-sdk/client-route53resolver";
import { RUM } from "@aws-sdk/client-rum";
import { S3 } from "@aws-sdk/client-s3";
import { S3Control } from "@aws-sdk/client-s3-control";
import { S3Outposts } from "@aws-sdk/client-s3outposts";
import { SageMakerA2IRuntime } from "@aws-sdk/client-sage-maker-a2iruntime";
import { SageMaker } from "@aws-sdk/client-sagemaker";
import { SagemakerEdge } from "@aws-sdk/client-sagemaker-edge";
import { SageMakerFeatureStoreRuntime } from "@aws-sdk/client-sagemaker-featurestore-runtime";
import { SageMakerRuntime } from "@aws-sdk/client-sagemaker-runtime";
import { Savingsplans } from "@aws-sdk/client-savingsplans";
import { Schemas } from "@aws-sdk/client-schemas";
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import { SecurityHub } from "@aws-sdk/client-securityhub";
import { ServerlessApplicationRepository } from "@aws-sdk/client-serverlessapplicationrepository";
import { ServiceCatalog } from "@aws-sdk/client-service-catalog";
import { ServiceCatalogAppRegistry } from "@aws-sdk/client-service-catalog-appregistry";
import { ServiceQuotas } from "@aws-sdk/client-service-quotas";
import { ServiceDiscovery } from "@aws-sdk/client-servicediscovery";
import { SES } from "@aws-sdk/client-ses";
import { SESv2 } from "@aws-sdk/client-sesv2";
import { SFN } from "@aws-sdk/client-sfn";
import { Shield } from "@aws-sdk/client-shield";
import { Signer } from "@aws-sdk/client-signer";
import { SMS } from "@aws-sdk/client-sms";
import { SnowDeviceManagement } from "@aws-sdk/client-snow-device-management";
import { Snowball } from "@aws-sdk/client-snowball";
import { SNS } from "@aws-sdk/client-sns";
import { SQS } from "@aws-sdk/client-sqs";
import { SSM } from "@aws-sdk/client-ssm";
import { SSMContacts } from "@aws-sdk/client-ssm-contacts";
import { SSMIncidents } from "@aws-sdk/client-ssm-incidents";
import { SSO } from "@aws-sdk/client-sso";
import { SSOAdmin } from "@aws-sdk/client-sso-admin";
import { SSOOIDC } from "@aws-sdk/client-sso-oidc";
import { StorageGateway } from "@aws-sdk/client-storage-gateway";
import { STS } from "@aws-sdk/client-sts";
import { Support } from "@aws-sdk/client-support";
import { SWF } from "@aws-sdk/client-swf";
import { Synthetics } from "@aws-sdk/client-synthetics";
import { Textract } from "@aws-sdk/client-textract";
import { TimestreamQuery } from "@aws-sdk/client-timestream-query";
import { TimestreamWrite } from "@aws-sdk/client-timestream-write";
import { Transcribe } from "@aws-sdk/client-transcribe";
import { Transfer } from "@aws-sdk/client-transfer";
import { Translate } from "@aws-sdk/client-translate";
import { VoiceID } from "@aws-sdk/client-voice-id";
import { WAF } from "@aws-sdk/client-waf";
import { WAFRegional } from "@aws-sdk/client-waf-regional";
import { WAFV2 } from "@aws-sdk/client-wafv2";
import { WellArchitected } from "@aws-sdk/client-wellarchitected";
import { Wisdom } from "@aws-sdk/client-wisdom";
import { WorkDocs } from "@aws-sdk/client-workdocs";
import { WorkLink } from "@aws-sdk/client-worklink";
import { WorkMail } from "@aws-sdk/client-workmail";
import { WorkMailMessageFlow } from "@aws-sdk/client-workmailmessageflow";
import { WorkSpaces } from "@aws-sdk/client-workspaces";
import { WorkSpacesWeb } from "@aws-sdk/client-workspaces-web";
import { XRay } from "@aws-sdk/client-xray";

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
new SageMakerA2IRuntime();
new AutoScaling();
new AutoScalingPlans();
new Backup();
new BackupGateway();
new Batch();
new Braket();
new Budgets();
new CostAndUsageReportService();
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
new Codeartifact();
new CodeBuild();
new CodeCommit();
new CodeDeploy();
new CodeGuruProfiler();
new CodeGuruReviewer();
new CodePipeline();
new CodeStar();
new CodestarNotifications();
new CodeStarConnections();
new CognitoIdentity();
new CognitoIdentityProvider();
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
new DatabaseMigrationService();
new DataBrew();
new DataExchange();
new DataPipeline();
new DataSync();
new Detective();
new DevOpsGuru();
new DeviceFarm();
new DirectConnect();
new DirectoryService();
new ApplicationDiscoveryService();
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
new ElasticLoadBalancing();
new ElasticLoadBalancingV2();
new EMR();
new EMRContainers();
new ElasticsearchService();
new ElastiCache();
new ElasticBeanstalk();
new ElasticInference();
new ElasticTranscoder();
new EventBridge();
new Evidently();
new FMS();
new FSx();
new Finspace();
new FinspaceData();
new Firehose();
new Fis();
new Forecastquery();
new Forecast();
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
new Ivs();
new Identitystore();
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
new IoT();
new IoTDataPlane();
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
new KinesisVideoSignaling();
new LakeFormation();
new Lambda();
new LexModelBuildingService();
new LexModelsV2();
new LexRuntimeService();
new LexRuntimeV2();
new LicenseManager();
new Lightsail();
new Location();
new LookoutEquipment();
new LookoutMetrics();
new LookoutVision();
new Mq();
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
new RDSData();
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
new SESv2();
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
new Savingsplans();
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
new SFN();
new StorageGateway();
new Support();
new Synthetics();
new Textract();
new TimestreamQuery();
new TimestreamWrite();
new Transcribe();
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

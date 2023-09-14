// This file is generated by scripts/generateReqResTypesMap/index.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.

/* eslint-disable @typescript-eslint/naming-convention */
export const CLIENT_REQ_RES_TYPES_MAP: Record<string, Record<string, string>> = {
  LaunchConfigurationNameType: { AutoScaling: "DeleteLaunchConfiguration" },
  AutoScalingGroupNamesType: { AutoScaling: "DescribeAutoScalingGroups" },
  LaunchConfigurationNamesType: { AutoScaling: "DescribeLaunchConfigurations" },
  ScalingProcessQuery: { AutoScaling: "SuspendProcesses" },
  IdentityPool: { CognitoIdentity: "UpdateIdentityPool" },
  ListAgentStatusRequest: { Connect: "ListAgentStatuses" },
  ListAgentStatusResponse: { Connect: "ListAgentStatuses" },
  DeleteCollectorRequest: { DMS: "DeleteFleetAdvisorCollector" },
  DeleteCollectorResponse: { DMS: "DeleteFleetAdvisorCollector" },
  KinesisStreamingDestinationInput: { DynamoDB: "EnableKinesisStreamingDestination" },
  CancelConversionRequest: { EC2: "CancelConversionTask" },
  CancelConversionResponse: { EC2: "CancelConversionTask" },
  CreateAccessPointInput: { ELB: "CreateLoadBalancer" },
  CreateLoadBalancerListenerInput: { ELB: "CreateLoadBalancerListeners" },
  DeleteAccessPointInput: { ELB: "DeleteLoadBalancer" },
  DeleteLoadBalancerListenerInput: { ELB: "DeleteLoadBalancerListeners" },
  DeregisterEndPointsInput: { ELB: "DeregisterInstancesFromLoadBalancer" },
  DescribeEndPointStateInput: { ELB: "DescribeInstanceHealth" },
  DescribeAccessPointsInput: { ELB: "DescribeLoadBalancers" },
  RemoveAvailabilityZonesInput: { ELB: "DisableAvailabilityZonesForLoadBalancer" },
  AddAvailabilityZonesInput: { ELB: "EnableAvailabilityZonesForLoadBalancer" },
  RegisterEndPointsInput: { ELB: "RegisterInstancesWithLoadBalancer" },
  InvocationRequest: { Lambda: "Invoke" },
  InvocationResponse: { Lambda: "Invoke" },
  CreateMigrationWorkflowRequest: { MigrationHubOrchestrator: "CreateWorkflow" },
  CreateMigrationWorkflowResponse: { MigrationHubOrchestrator: "CreateWorkflow" },
  DeleteMigrationWorkflowRequest: { MigrationHubOrchestrator: "DeleteWorkflow" },
  DeleteMigrationWorkflowResponse: { MigrationHubOrchestrator: "DeleteWorkflow" },
  GetMigrationWorkflowTemplateRequest: { MigrationHubOrchestrator: "GetTemplate" },
  GetMigrationWorkflowTemplateResponse: { MigrationHubOrchestrator: "GetTemplate" },
  GetMigrationWorkflowRequest: { MigrationHubOrchestrator: "GetWorkflow" },
  GetMigrationWorkflowResponse: { MigrationHubOrchestrator: "GetWorkflow" },
  ListMigrationWorkflowTemplatesRequest: { MigrationHubOrchestrator: "ListTemplates" },
  ListMigrationWorkflowTemplatesResponse: { MigrationHubOrchestrator: "ListTemplates" },
  ListMigrationWorkflowsRequest: { MigrationHubOrchestrator: "ListWorkflows" },
  ListMigrationWorkflowsResponse: { MigrationHubOrchestrator: "ListWorkflows" },
  StartMigrationWorkflowRequest: { MigrationHubOrchestrator: "StartWorkflow" },
  StartMigrationWorkflowResponse: { MigrationHubOrchestrator: "StartWorkflow" },
  StopMigrationWorkflowRequest: { MigrationHubOrchestrator: "StopWorkflow" },
  StopMigrationWorkflowResponse: { MigrationHubOrchestrator: "StopWorkflow" },
  UpdateMigrationWorkflowRequest: { MigrationHubOrchestrator: "UpdateWorkflow" },
  UpdateMigrationWorkflowResponse: { MigrationHubOrchestrator: "UpdateWorkflow" },
  CancelAnnotationImportRequest: { Omics: "CancelAnnotationImportJob" },
  CancelAnnotationImportResponse: { Omics: "CancelAnnotationImportJob" },
  CancelVariantImportRequest: { Omics: "CancelVariantImportJob" },
  CancelVariantImportResponse: { Omics: "CancelVariantImportJob" },
  GetAnnotationImportRequest: { Omics: "GetAnnotationImportJob" },
  GetAnnotationImportResponse: { Omics: "GetAnnotationImportJob" },
  GetVariantImportRequest: { Omics: "GetVariantImportJob" },
  GetVariantImportResponse: { Omics: "GetVariantImportJob" },
  StartAnnotationImportRequest: { Omics: "StartAnnotationImportJob" },
  StartAnnotationImportResponse: { Omics: "StartAnnotationImportJob" },
  StartVariantImportRequest: { Omics: "StartVariantImportJob" },
  StartVariantImportResponse: { Omics: "StartVariantImportJob" },
  PartnerIntegrationInputMessage: { Redshift: "DeletePartner" },
  ModifyAquaInputMessage: { Redshift: "ModifyAquaConfiguration" },
  ScalarCrlRequest: { RolesAnywhere: "GetCrl" },
  ScalarCrlResponse: { RolesAnywhere: "GetCrl" },
  ScalarProfileRequest: { RolesAnywhere: "GetProfile" },
  ScalarProfileResponse: { RolesAnywhere: "GetProfile" },
  ScalarTrustAnchorRequest: { RolesAnywhere: "GetTrustAnchor" },
  ScalarTrustAnchorResponse: { RolesAnywhere: "GetTrustAnchor" },
  ScalarSubjectRequest: { RolesAnywhere: "GetSubject" },
  ScalarSubjectResponse: { RolesAnywhere: "GetSubject" },
  ListRequest: { RolesAnywhere: "ListTrustAnchors" },
  ListResponse: { RolesAnywhere: "ListTrustAnchors" },
  ListEarthObservationJobInput: { SageMakerGeospatial: "ListEarthObservationJobs" },
  ListVectorEnrichmentJobInput: { SageMakerGeospatial: "ListVectorEnrichmentJobs" },
  DescribeDeviceEc2Input: { SnowDeviceManagement: "DescribeDeviceEc2Instances" },
};

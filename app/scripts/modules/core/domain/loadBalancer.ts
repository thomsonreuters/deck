import { InstanceCounts } from './instanceCounts';
import { Instance } from './instance';

export interface ILoadBalancer {
  account?: string;
  cloudProvider?: string;
  name?: string;
  detail?: string;
  healthState?: string;
  instances?: Instance[];
  instanceCounts?: InstanceCounts;
  loadBalancerType?: string;
  provider?: string;
  region?: string;
  securityGroups?: string[];
  serverGroups?: any[];
  stack?: string;
  type?: string;
  vpcId?: string;
}

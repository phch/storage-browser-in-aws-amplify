import { defineStorage } from '@aws-amplify/backend';
import { buildStorageAccessRules } from '../company-config';

export const storage = defineStorage({
  name: 'FederatedCompanyFileStorage',
  access: (allow) => buildStorageAccessRules(allow)
});
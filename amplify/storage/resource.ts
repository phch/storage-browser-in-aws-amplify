import { defineStorage } from '@aws-amplify/backend';
import { buildStorageAccessRules } from '../company-config';

export const storage = defineStorage({
  name: 'fileStorageBucket',
  access: (allow) => buildStorageAccessRules(allow),
});
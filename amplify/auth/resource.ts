import { defineAuth } from '@aws-amplify/backend';
import { getAllGroups } from '../company-config';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      otpLogin: true // Enable email-based one-time passwords
    },
  },
  groups: getAllGroups()
});

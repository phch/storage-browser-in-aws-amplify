import * as React from 'react';
import { Container, Header, SpaceBetween, ColumnLayout, Box } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function ProfilePage() {
  const { user } = useAuthenticator((context) => [context.user]);

  return (
    <SpaceBetween size="l">
      <Container
        header={
          <Header variant="h1">
            User Profile
          </Header>
        }
      >
        <ColumnLayout columns={2} variant="text-grid">
          <div>
            <Box variant="awsui-key-label">Email</Box>
            <div>{user?.signInDetails?.loginId || 'N/A'}</div>
          </div>
          <div>
            <Box variant="awsui-key-label">User ID</Box>
            <div>{user?.userId || 'N/A'}</div>
          </div>
          <div>
            <Box variant="awsui-key-label">Username</Box>
            <div>{user?.username || 'N/A'}</div>
          </div>
        </ColumnLayout>
      </Container>
    </SpaceBetween>
  );
}

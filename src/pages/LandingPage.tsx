import * as React from 'react';
import { Container, Header, SpaceBetween, Button, Box } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  if (user) {
    // Authenticated view
    return (
      <Container
        header={
          <Header variant="h1">
            Welcome back, {user.signInDetails?.loginId}!
          </Header>
        }
      >
        <SpaceBetween size="l">
          <Box variant="p">
            You're signed in and ready to use Storage Browser.
          </Box>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Go to Storage Browser
          </Button>
        </SpaceBetween>
      </Container>
    );
  }

  // Unauthenticated view
  return (
    <Container
      header={
        <Header variant="h1">
          Welcome to Storage Browser
        </Header>
      }
    >
      <SpaceBetween size="l">
        <Box variant="p">
          Storage Browser is a powerful tool for managing your cloud storage. 
          Sign in to get started and explore your files with ease.
        </Box>
        <Button variant="primary" onClick={() => navigate('/login')}>
          Get Started
        </Button>
      </SpaceBetween>
    </Container>
  );
}

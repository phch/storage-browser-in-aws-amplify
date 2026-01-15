import * as React from 'react';
import { Container, Header, SpaceBetween, Button, Box } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container
      header={
        <Header variant="h1">
          404 - Page Not Found
        </Header>
      }
    >
      <SpaceBetween size="l">
        <Box variant="p">
          The page you're looking for doesn't exist or has been moved.
        </Box>
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="primary" onClick={() => navigate('/')}>
            Go to Home
          </Button>
          <Button onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </SpaceBetween>
      </SpaceBetween>
    </Container>
  );
}

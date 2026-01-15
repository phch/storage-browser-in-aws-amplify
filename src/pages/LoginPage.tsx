import * as React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Container, Box } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  React.useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);

  return (
    <Box padding={{ vertical: 'xxxl', horizontal: 'l' }}>
      <Container>
        <Box textAlign="center" padding="l">
          <Authenticator />
        </Box>
      </Container>
    </Box>
  );
}

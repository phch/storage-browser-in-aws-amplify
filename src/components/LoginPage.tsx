import * as React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Modal, Box } from '@cloudscape-design/components';
import { useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

interface LoginPageProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function LoginPage({ visible, onDismiss }: LoginPageProps) {
  const navigate = useNavigate();

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      size="medium"
      header="Sign in to Storage Browser"
    >
      <Box padding="l">
        <Authenticator>
          {({ signOut, user }) => {
            // Once authenticated, redirect to browser
            if (user) {
              navigate(-1);
            }
            return null;
          }}
        </Authenticator>
      </Box>
    </Modal>
  );
}

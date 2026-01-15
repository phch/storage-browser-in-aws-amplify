import * as React from 'react';
import { TopNavigation } from '@cloudscape-design/components';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  return (
    <TopNavigation
      identity={{
        href: '/',
        title: 'Storage Browser',
        logo: {
          src: '/vite.svg',
          alt: 'Storage Browser'
        }
      }}
      utilities={[
        {
          type: 'menu-dropdown',
          text: 'Tools',
          items: [
            {
              id: 'storage-browser',
              text: 'Storage Browser'
            }
          ],
          onItemClick: ({ detail }) => {
            if (detail.id === 'storage-browser') {
              navigate('/storage-browser');
            }
          }
        },
        user ? {
          type: 'menu-dropdown',
          text: user.signInDetails?.loginId || 'User',
          iconName: 'user-profile',
          items: [
            {
              id: 'profile',
              text: 'Profile'
            },
            {
              id: 'signout',
              text: 'Sign out'
            }
          ],
          onItemClick: ({ detail }) => {
            if (detail.id === 'profile') {
              navigate('/profile');
            } else if (detail.id === 'signout') {
              signOut();
              navigate('/');
            }
          }
        } : {
          type: 'button',
          text: 'Sign In',
          onClick: () => navigate('/login')
        }
      ]}
    />
  );
}

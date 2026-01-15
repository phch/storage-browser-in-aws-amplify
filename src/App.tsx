import * as React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import S3BrowserPage from './pages/S3BrowserPage';
import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthenticator((context) => [context.user]);
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/storage-browser' 
            element={
              <ProtectedRoute>
                <S3BrowserPage />
              </ProtectedRoute>
            } 
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;

import * as React from 'react';
import { apiClient } from '@/api/apiClient';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({ id: 'mock-user', name: 'Convidado' });
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = React.useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = React.useState(false);
  const [authError, setAuthError] = React.useState(null);
  const [appPublicSettings, setAppPublicSettings] = React.useState({ id: 'mock-app', public_settings: {} });

  const checkAppState = async () => {
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const navigateToLogin = () => {
    console.log('Mock navigate to login');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

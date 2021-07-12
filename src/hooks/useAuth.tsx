import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/auth';

export const useAuth = (): AuthContextType => {
  const authContext = useContext(AuthContext);

  if (!authContext)
    throw new Error('useAuth must be used within an AuthProvider');

  return authContext;
};

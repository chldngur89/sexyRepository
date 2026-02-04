import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  user_metadata: {
    name?: string;
    avatar_url?: string;
  };
}

interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = useCallback(async () => {
    // Implement Google Sign-In here
    // For now, just set a mock user
    setUser({
      id: '1',
      email: 'user@gmail.com',
      user_metadata: { name: '사용자', avatar_url: '' },
    });
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import { useState } from 'react';

export interface UserData {
  displayName: string;
  uid: string;
  email: string;
  photoURL: string;
}

export default function authState() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    uid: '',
    email: '',
    photoURL: '',
    displayName: '',
  });

  function storeAuthState(userData: UserData) {
    setIsAuthenticated(true);
    setUserData(userData);
  }

  function clearAuthState() {
    setUserData({ uid: '', email: '', photoURL: '', displayName: '' });
    setIsAuthenticated(false);
  }

  return { storeAuthState, clearAuthState, isAuthenticated, userData };
}

export interface AuthState {
  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  storeAuthState: (userData: UserData) => void;
  clearAuthState: () => void;
  userData: UserData;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  storeAuthState: () => alert('authState: unhandled function'),
  clearAuthState: () => alert('authState: unhandled function'),
  userData: { uid: '', email: '', photoURL: '', displayName: '' },
};

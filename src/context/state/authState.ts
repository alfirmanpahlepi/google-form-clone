import { useState } from 'react';

export interface UserData {
  displayName: string;
  uid: string;
  email: string;
  photoURL: string;
}

export default function authState() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    uid: Date.now().toString(),
    displayName: 'Anonim-' + Date.now(),
    email: '-',
    photoURL: 'https://news-app-sepia.vercel.app/_next/image?url=%2Fuser.png&w=3840&q=75',
  });

  function storeAuthState(userData: UserData) {
    setIsAuthenticated(true);
    setUserData(userData);
  }

  function clearAuthState() {
    setUserData({
      uid: Date.now().toString(),
      displayName: 'Anonim-' + Date.now(),
      email: '-',
      photoURL: 'https://news-app-sepia.vercel.app/_next/image?url=%2Fuser.png&w=3840&q=75',
    });
    setIsAuthenticated(false);
  }

  return { storeAuthState, clearAuthState, isAuthenticated, userData, isPending, setIsPending };
}

export interface AuthState {
  isAuthenticated: boolean;
  isPending: boolean;
  userData: UserData;
  clearAuthState: () => void;
  // eslint-disable-next-line no-unused-vars
  setIsPending: (boolean: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  storeAuthState: (userData: UserData) => void;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  isPending: true,
  userData: { uid: '', email: '', photoURL: '', displayName: '' },
  storeAuthState: () => alert('authState: unhandled function'),
  clearAuthState: () => alert('authState: unhandled function'),
  setIsPending: () => alert('authState: unhandled function'),
};

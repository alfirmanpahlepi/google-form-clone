import { createContext } from 'react';
import modalState, { initialModalState, ModalState } from '@/context/state/modalState';
import authState, { AuthState, initialAuthState } from './state/authState';

export interface AppContextType {
  modal: ModalState;
  auth: AuthState;
}
export const AppContext = createContext<AppContextType>({
  modal: initialModalState,
  auth: initialAuthState,
});

export default function storage() {
  const modal = modalState();
  const auth = authState();

  const value = { modal, auth };

  return value;
}

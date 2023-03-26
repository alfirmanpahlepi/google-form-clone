import { createContext } from 'react';
import modalState, { initialModalState, ModalState } from '@/context/state/modalState';

export interface AppContextType {
  modal: ModalState;
}
export const AppContext = createContext<AppContextType>({
  modal: initialModalState,
});

export default function storage() {
  const modal = modalState();

  const value = { modal };

  return value;
}

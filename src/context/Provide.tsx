import Modal from '@/components/Modal';
import storage, { AppContext } from '@/context/store';
import { ReactNode } from 'react';

export default function Provider({ children }: { children: ReactNode }) {
  const value = storage();

  return (
    <AppContext.Provider value={{ ...value }}>
      <Modal />
      {children}
    </AppContext.Provider>
  );
}

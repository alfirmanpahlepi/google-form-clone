import storage, { AppContext } from '@/context/store';
import { ReactNode } from 'react';

export default function Provider({ children }: { children: ReactNode }) {
  const value = storage();

  return <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>;
}

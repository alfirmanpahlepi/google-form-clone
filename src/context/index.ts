import { useContext } from 'react';
import { AppContext, AppContextType } from '@/context/store';

export default function useAppState() {
  const context: AppContextType = useContext(AppContext);

  return context;
}

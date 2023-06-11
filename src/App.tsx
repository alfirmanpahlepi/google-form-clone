import { useEffect } from 'react';
import Page from './routes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useAppState from './context';

function App() {
  const { auth, modal } = useAppState();

  useEffect(() => {
    auth.setIsPending(true);

    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      modal.openModal();

      if (user)
        auth.storeAuthState({
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
          uid: user.uid,
        });
      else auth.clearAuthState();

      modal.closeModal();

      auth.setIsPending(false);
    });

    return () => unsubscribe();
  }, []);

  return <Page />;
}

export default App;

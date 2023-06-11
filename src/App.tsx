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
          displayName: user.displayName || 'Anonim-' + Date.now(),
          email: user.email || '-',
          photoURL:
            user.photoURL ||
            'https://news-app-sepia.vercel.app/_next/image?url=%2Fuser.png&w=3840&q=75',
          uid: user.uid || Date.now().toString(),
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

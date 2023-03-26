import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Page from './routes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useAppState from './context';

function App() {
  const { auth, modal } = useAppState();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setPending(true);

      modal.openModal();

      if (user)
        auth.storeAuthState({
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
          uid: user.uid,
        });
      else auth.clearAuthState();

      setPending(false);

      modal.closeModal();
    });

    return () => unsubscribe();
  }, []);

  if (pending) return;

  return (
    <>
      <Modal />
      <Page />
    </>
  );
}

export default App;

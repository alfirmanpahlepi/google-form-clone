import { signInWithPopup, GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import app from '.';

export const signInWithGoogleFirebase = () =>
  signInWithPopup(getAuth(app), new GoogleAuthProvider())
    .then((result) => result.user)
    .catch((e) => e);

export const signOutFirebase = () => signOut(getAuth(app)).catch((e) => e);

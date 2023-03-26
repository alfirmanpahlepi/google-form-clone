import { signInWithPopup, GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import app from '.';

export const signInWithGoogleFirebase = () =>
  signInWithPopup(getAuth(app), new GoogleAuthProvider())
    .then((result) => result.user)
    .catch((error) => error);

export const signOutFirebase = () =>
  signOut(getAuth(app))
    .then(() => true)
    .catch(() => false);

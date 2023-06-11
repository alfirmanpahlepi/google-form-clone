import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlLz6w3rLYJ_n211nRIVCK_tlV2U1GA0A',
  authDomain: 'handform-c62a3.firebaseapp.com',
  databaseURL: 'https://handform-c62a3-default-rtdb.firebaseio.com',
  projectId: 'handform-c62a3',
  storageBucket: 'handform-c62a3.appspot.com',
  messagingSenderId: '867248517559',
  appId: '1:867248517559:web:7eed23797fda6d2ae8f832',
};

const app = initializeApp(firebaseConfig);

export default app;

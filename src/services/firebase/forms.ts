import app from '.';
import {
  collection,
  addDoc,
  getFirestore,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  DocumentData,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import type { FormsData } from '@/app/forms/useForms';

export const createFormFirestore = (uid: string, data: FormsData) =>
  addDoc(collection(getFirestore(app), 'forms'), {
    ...data,
    uid,
    update_at: new Date(Date.now()).toISOString(),
  }).then(() => true);

export const readFormsRealtimeFirestore = (
  uid: string,
  // eslint-disable-next-line no-unused-vars
  callback: (result: DocumentData[]) => void,
) =>
  onSnapshot(
    query(collection(getFirestore(app), 'forms'), where('uid', '==', uid)),
    (querySnapshot) => {
      const data: DocumentData[] = [];
      querySnapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      callback(data);
    },
  );

export const readFormByIdFirestore = (id: string) =>
  getDoc(doc(getFirestore(app), 'forms', id)).then((res) => {
    if (!res.exists()) throw new Error('form doen`t exist');

    return res.data();
  });

export const updateFormByIdFirestore = (id: string, data: FormsData) =>
  setDoc(doc(getFirestore(app), 'forms', id), {
    ...data,
    update_at: new Date(Date.now()).toISOString(),
  }).then(() => true);

export const deleteFormFirestore = (id: string) =>
  deleteDoc(doc(getFirestore(app), 'forms', id)).then(() => true);

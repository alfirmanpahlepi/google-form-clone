import PlusButton from './PlusButton';
import FormCardList from './FormCardList';
import NoForm from './NoForm';
import { useEffect, useState } from 'react';
import { readFormsRealtimeFirestore } from '@/services/firebase/forms';
import useAppState from '@/context';

export interface Form {
  id: string;
  uid: string;
  update_at: string;
  title: string;
}

export default function Home() {
  const [data, setData] = useState<Form[]>([]);
  const { modal, auth } = useAppState();

  useEffect(() => {
    if (auth.isPending && !auth.isAuthenticated) return setData([]);

    modal.openModal();

    const unsubscribe = readFormsRealtimeFirestore(auth.userData.uid, (result) =>
      setData(result as unknown as Form[]),
    );

    modal.closeModal();

    return () => unsubscribe();
  }, [auth.isAuthenticated, auth.isPending, auth.userData.uid]);

  return (
    <>
      <div className="p-8">
        <div className="container relative space-y-8">
          <h5 className="text-lg font-semibold text-neutral-600">Formulir Terbaru</h5>
          {data.length ? <FormCardList forms={data} /> : <NoForm />}
        </div>
      </div>
      <PlusButton />
    </>
  );
}

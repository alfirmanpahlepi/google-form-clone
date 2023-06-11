import PlusButton from './PlusButton';
import FormCardList from './FormCardList';
import NoForm from './NoForm';
import { useEffect, useState } from 'react';
import { readFormsRealtimeFirestore } from '@/services/firebase/forms';
import useAppState from '@/context';
import { Avatar } from '@/components/ui';
import { Question } from './forms/useForms';

export interface Form {
  id: string;
  uid: string;
  title: string;
  update_at: string;
  description: string;
  questions: Question[];
}

export default function Home() {
  const [showRespondents, setShowRespondents] = useState<Form | null>(null);
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
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="container relative space-y-8">
          <h5 className="text-lg font-semibold text-neutral-600">Formulir Terbaru</h5>
          {data.length ? (
            <FormCardList forms={data} setShowRespondents={setShowRespondents} />
          ) : (
            <NoForm />
          )}
          {showRespondents && (
            <div className="space-y-6">
              <div className="space-y-2 rounded-md bg-white p-6 shadow">
                <h4 className="text-xl font-semibold">{showRespondents.title}</h4>
                <p className="text-gray-500">{showRespondents.description}</p>{' '}
              </div>
              {showRespondents.questions.map((question, i) => (
                <div key={i} className="rounded-md bg-white p-6 shadow">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">{question.title}</h4>
                    <p className="text-gray-500">{question.description}</p>
                  </div>
                  <div className="ml-8 mt-3">
                    {question.respondents.map((respondent, i) => (
                      <div
                        key={i}
                        className="justify-between space-y-2 p-3 odd:bg-slate-50 lg:flex lg:space-y-0 lg:space-x-2"
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <Avatar imageUrl={respondent.photoUrl} name={respondent.name} />
                          </div>
                          <div>
                            <h6 className="break-all text-sm">{respondent.name}</h6>
                            <p className="break-all text-xs text-gray-500">{respondent.email}</p>
                          </div>
                        </div>
                        <p>{respondent.response}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <PlusButton />
    </>
  );
}

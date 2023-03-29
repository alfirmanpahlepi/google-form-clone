import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAppState from '@/context';
import HeadForm from './HeadForm';
import Question from './Question';
import useEditForms from './useEditForms';

export default function Forms() {
  const { title, description, onHeadFormInputChange, action, questions, submitEditForm } =
    useEditForms();

  const { auth } = useAppState();

  const navigate = useNavigate();

  const { id } = useParams();

  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const editQuery = !!query.get('edit');

  const withEditAccess = editQuery || id === 'new';

  useEffect(() => {
    if (auth.isPending) return;
    // wait for isPending false

    if ((!auth.isAuthenticated && id === 'new') || (!auth.isAuthenticated && editQuery)) {
      // if unauthorize user try to go to /form/new then redirect to home
      // if unauthorize user try to go to /form/{id}?edit=true then redirect to home

      alert('unauthorized');

      return navigate('/', { replace: true, state: location });
    }
  }, [auth.isPending, auth.isAuthenticated, id, location]);

  return (
    <div className="p-8">
      <div className="mx-auto w-full space-y-4 lg:w-[764px]">
        <HeadForm
          addQuestion={() => action.addQuestion(0)}
          description={description}
          onInputChange={onHeadFormInputChange}
          title={title}
          withEditAccess={withEditAccess}
        />
        {questions.map((item, i) => (
          <Question
            key={i}
            action={action}
            currentIndex={i}
            data={item}
            withEditAccess={withEditAccess}
          />
        ))}
        <div className="flex justify-end">
          <button
            className="rounded-md bg-white py-2 px-5 tracking-wide text-gray-500 shadow"
            disabled={!title || !description || !questions.length}
            onClick={submitEditForm}
            type="button"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

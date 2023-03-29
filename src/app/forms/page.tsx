import HeadForm from './HeadForm';
import Question from './Question';
import useForms from './useForms';

export default function Forms() {
  const {
    title,
    description,
    onHeadFormInputChange,
    action,
    questions,
    submitEditForm,
    hasEditAccess,
  } = useForms();

  return (
    <div className="p-8">
      <div className="mx-auto w-full space-y-4 lg:w-[764px]">
        <HeadForm
          addQuestion={() => action.addQuestion(0)}
          description={description}
          hasEditAccess={hasEditAccess}
          onInputChange={onHeadFormInputChange}
          title={title}
        />
        {questions.map((item, i) => (
          <Question
            key={i}
            action={action}
            currentIndex={i}
            data={item}
            hasEditAccess={hasEditAccess}
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

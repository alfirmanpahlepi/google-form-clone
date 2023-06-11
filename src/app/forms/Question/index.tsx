import useAppState from '@/context';
import type { Question as QuestionInterface, ActionForms } from '../useForms';
import ButtonIconQuestion from './ButtonIconQuestion';
import CheckboxInput from './CheckboxInput';
import DropdownQuestion from './DropdownQuestion';
import RadioInput from './RadioInput';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';

export default function Question({
  action,
  currentIndex,
  data,
  hasEditAccess,
}: {
  action: ActionForms;
  currentIndex: number;
  hasEditAccess: boolean;
  data: QuestionInterface;
}) {
  const { auth } = useAppState();

  const respondent = data.respondents.find((el) => el.uid === auth.userData.uid);

  const responseValue = hasEditAccess ? '' : respondent?.response ?? '';

  return (
    <div className="relative rounded-lg border-t bg-white px-8 pb-6 shadow">
      {hasEditAccess && (
        <DropdownQuestion
          changeDescriptionStatus={(status) => action.changeDescriptionStatus(currentIndex, status)}
          changeQuestionType={(inputType) => action.changeQuestionType(currentIndex, inputType)}
        />
      )}
      <div className="space-y-2 pt-4 pb-8">
        {/* title  */}
        <input
          className="w-full border-b border-white bg-white py-3 text-xl hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
          disabled={!hasEditAccess}
          name="title"
          onChange={(e) =>
            action.onTitleOrDescriptioQuestionChange(currentIndex, 'title', e.target.value)
          }
          placeholder="Judul pertanyaan"
          value={data.title}
        />
        {/* description  */}
        {data.withDescription && (
          <textarea
            className="h-20 w-full resize-y border-b border-white bg-white text-sm hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
            disabled={!hasEditAccess}
            name="desc"
            onChange={(e) =>
              action.onTitleOrDescriptioQuestionChange(currentIndex, 'description', e.target.value)
            }
            placeholder="Deskripsi pertanyaan"
            value={data.withDescription ? data.description : ''}
          ></textarea>
        )}
      </div>

      {/* inputs  */}
      {data.type === 'text' && (
        <TextInput
          hasEditAccess={hasEditAccess}
          setResponse={(e) => action.responseQuestion(currentIndex, e.target.value)}
          value={responseValue}
        />
      )}
      {data.type === 'textarea' && (
        <TextAreaInput
          hasEditAccess={hasEditAccess}
          setResponse={(e) => action.responseQuestion(currentIndex, e.target.value)}
          value={responseValue}
        />
      )}
      {data.type === 'radio' && (
        <RadioInput
          addOption={() => action.addOption(currentIndex)}
          hasEditAccess={hasEditAccess}
          name={'radio' + currentIndex}
          options={data.options}
          removeOption={(optionIndex) => action.removeOption(currentIndex, optionIndex)}
          setOptionName={(optionIndex, value) =>
            action.setOptionName(currentIndex, optionIndex, value)
          }
          setResponse={(e) => action.responseQuestion(currentIndex, e.target.value)}
          value={responseValue}
        />
      )}
      {data.type === 'checkbox' && (
        <CheckboxInput
          addOption={() => action.addOption(currentIndex)}
          hasEditAccess={hasEditAccess}
          options={data.options}
          removeOption={(optionIndex) => action.removeOption(currentIndex, optionIndex)}
          setOptionName={(optionIndex, value) =>
            action.setOptionName(currentIndex, optionIndex, value)
          }
          setResponse={(value) => action.responseQuestion(currentIndex, value)}
          value={responseValue.split(', ')}
        />
      )}
      {hasEditAccess && (
        <ButtonIconQuestion
          add={() => action.addQuestion(currentIndex + 1)}
          duplicate={() => action.duplicateQuestion(currentIndex + 1, data)}
          remove={() => action.deleteQuestion(currentIndex)}
        />
      )}
    </div>
  );
}

import type { Question as QuestionInterface, Action } from '../useEditForms';
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
  withEditAccess,
}: {
  action: Action;
  currentIndex: number;
  withEditAccess: boolean;
  data: QuestionInterface;
}) {
  return (
    <div className="relative rounded-lg border-t bg-white px-8 shadow">
      <DropdownQuestion
        changeDescriptionStatus={(status) => action.changeDescriptionStatus(currentIndex, status)}
        changeQuestionType={(inputType) => action.changeQuestionType(currentIndex, inputType)}
      />
      <div className="space-y-2 pt-4 pb-8">
        {/* title  */}
        <input
          className="w-full border-b border-white bg-white py-3 text-xl hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
          disabled={!withEditAccess}
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
            disabled={!withEditAccess}
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
      {data.type === 'text' && <TextInput withEditAccess={withEditAccess} />}
      {data.type === 'textarea' && <TextAreaInput withEditAccess={withEditAccess} />}
      {data.type === 'radio' && (
        <RadioInput
          addOption={() => action.addOption(currentIndex)}
          options={data.options}
          removeOption={(optionIndex) => action.removeOption(currentIndex, optionIndex)}
          setOptionName={(optionIndex, value) =>
            action.setOptionName(currentIndex, optionIndex, value)
          }
          withEditAccess={withEditAccess}
        />
      )}
      {data.type === 'checkbox' && (
        <CheckboxInput
          addOption={() => action.addOption(currentIndex)}
          options={data.options}
          removeOption={(optionIndex) => action.removeOption(currentIndex, optionIndex)}
          setOptionName={(optionIndex, value) =>
            action.setOptionName(currentIndex, optionIndex, value)
          }
          withEditAccess={withEditAccess}
        />
      )}

      <ButtonIconQuestion
        add={() => action.addQuestion(currentIndex + 1)}
        duplicate={() => action.duplicateQuestion(currentIndex + 1, data)}
        remove={() => action.deleteQuestion(currentIndex)}
      />
    </div>
  );
}

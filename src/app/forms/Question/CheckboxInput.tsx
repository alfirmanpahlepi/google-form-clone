import { ChangeEvent, useState } from 'react';

/* eslint-disable no-unused-vars */
export default function CheckboxInput({
  options,
  hasEditAccess,
  addOption,
  removeOption,
  setOptionName,
  setResponse,
  value,
}: {
  options: string[];
  hasEditAccess: boolean;
  addOption: () => void;
  removeOption: (optionIndex: number) => void;
  setOptionName: (optionIndex: number, value: string) => void;
  setResponse: (value: string) => void;
  value: string[];
}) {
  const [checks, setChecks] = useState<string[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>, el: string) {
    const newChecks = [...checks];
    if (e.target.checked) newChecks.push(el);
    else
      newChecks.splice(
        checks.findIndex((check) => check === el),
        1,
      );
    setChecks([...newChecks]);
    setResponse(newChecks.join(', '));
  }

  return (
    <div>
      {options.map((el, idx) => (
        <div key={idx} className="group relative flex items-center space-x-3">
          <input
            checked={value.some((check) => check === el)}
            className="h-5 w-5"
            disabled={hasEditAccess}
            name="checkbox"
            onChange={(e) => handleChange(e, el)}
            type="checkbox"
          />
          <input
            className="w-full border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
            disabled={!hasEditAccess}
            onChange={(e) => setOptionName(idx, e.target.value)}
            placeholder={`opsi ${idx + 1}`}
            value={el ? el : ''}
          />
          {hasEditAccess && options.length > 1 && (
            <button
              className="absolute right-0 flex cursor-pointer items-center justify-end opacity-0 duration-300 group-hover:opacity-100"
              onClick={() => removeOption(idx)}
              type="button"
            >
              <img
                alt="delete"
                className="h-5 w-5 rotate-45 transform"
                src="/assets/icons/plus.svg"
              />
            </button>
          )}
        </div>
      ))}
      {hasEditAccess && (
        <div className="flex items-center space-x-3">
          <input className="h-5 w-5" disabled type="checkbox" />
          <button
            className="border-b border-white bg-white py-2 text-gray-400 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
            onClick={addOption}
            type="button"
          >
            Tambah opsi
          </button>
        </div>
      )}
    </div>
  );
}

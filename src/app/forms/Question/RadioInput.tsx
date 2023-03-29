/* eslint-disable no-unused-vars */
export default function RadioInput({
  options,
  withEditAccess,
  addOption,
  removeOption,
  setOptionName,
}: {
  options: string[];
  withEditAccess: boolean;
  addOption: () => void;
  removeOption: (optionIndex: number) => void;
  setOptionName: (optionIndex: number, value: string) => void;
}) {
  return (
    <>
      {options.map((el, idx) => (
        <div key={idx} className="group relative flex items-center space-x-3">
          <input
            className="h-5 w-5"
            disabled={withEditAccess}
            name="radio"
            // onChange={(e) => handleChange(e)}
            type="radio"
            value={el}
          />
          <input
            className="w-full border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
            disabled={!withEditAccess}
            onChange={(e) => setOptionName(idx, e.target.value)}
            placeholder={`opsi ${idx + 1}`}
            value={el ? el : ''}
          />
          {withEditAccess && options.length > 1 && (
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
      {withEditAccess && (
        <div className="flex items-center space-x-3">
          <input className="h-5 w-5" disabled type="radio" />
          <button
            className="border-b border-white bg-white py-2 text-gray-400 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
            onClick={addOption}
            type="button"
          >
            Tambah opsi
          </button>
        </div>
      )}
    </>
  );
}

import { ChangeEvent } from 'react';

export default function TextAreaInput({
  hasEditAccess,
  value,
  setResponse,
}: {
  hasEditAccess: boolean;
  value: string;
  // eslint-disable-next-line no-unused-vars
  setResponse: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      className="h-auto w-full resize-none border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
      disabled={hasEditAccess}
      onChange={setResponse}
      placeholder="Teks jawaban panjang"
      value={value}
    ></textarea>
  );
}

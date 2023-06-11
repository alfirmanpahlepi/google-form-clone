import { ChangeEvent } from 'react';

export default function TextInput({
  hasEditAccess,
  value,
  setResponse,
}: {
  hasEditAccess: boolean;
  value: string;
  // eslint-disable-next-line no-unused-vars
  setResponse: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="w-full border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
      disabled={hasEditAccess}
      onChange={setResponse}
      placeholder="Teks jawaban singkat"
      value={value}
    />
  );
}

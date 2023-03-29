/* eslint-disable no-unused-vars */
import type { ChangeEvent } from 'react';

export default function HeadForm({
  addQuestion,
  withEditAccess,
  title,
  description,
  onInputChange,
}: {
  addQuestion: () => void;
  withEditAccess: boolean;
  title: string;
  description: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="rounded-lg border-t-[10px] border-purple-600 bg-white px-8 shadow">
      <div className="space-y-2 pt-4 pb-8">
        <input
          className="w-full border-white bg-white py-3 text-3xl hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
          disabled={!withEditAccess}
          name="title"
          onChange={onInputChange}
          placeholder="Judul formulir"
          value={title}
        />
        <textarea
          className="h-20 w-full resize-y border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
          disabled={!withEditAccess}
          name="description"
          onChange={onInputChange}
          placeholder="Deskripsi formulir"
          value={description}
        ></textarea>
      </div>
      {withEditAccess && (
        <div className="flex items-center justify-end space-x-3 border-t py-3">
          <button onClick={addQuestion} type="button">
            <img alt="plus" className="h-6 w-6 cursor-pointer" src="/assets/icons/plusCircle.svg" />
          </button>
        </div>
      )}
    </div>
  );
}

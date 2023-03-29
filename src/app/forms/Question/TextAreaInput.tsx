export default function TextAreaInput({ withEditAccess }: { withEditAccess: boolean }) {
  return (
    <textarea
      //   onChange={(e) => handleChange(e)}
      //   value={textarea}
      className="h-auto w-full resize-none border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
      disabled={withEditAccess}
      placeholder="Teks jawaban panjang"
    ></textarea>
  );
}

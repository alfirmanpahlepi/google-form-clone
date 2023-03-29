export default function TextInput({ withEditAccess }: { withEditAccess: boolean }) {
  return (
    <input
      //   onChange={(e) => handleChange(e)}
      //   value={text}
      className="w-full border-b border-white bg-white py-2 hover:border-gray-300 focus:border-b-2 focus:border-purple-700"
      disabled={withEditAccess}
      placeholder="Teks jawaban singkat"
    />
  );
}

import FormCard from './FormCard';

export default function FormCardList({
  forms,
}: {
  forms: { title: string; date: string | number; id: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {forms.map((form, i) => (
        <FormCard key={i} date={form.date} id={form.id} title={form.title} />
      ))}
    </div>
  );
}

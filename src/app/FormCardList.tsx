import FormCard from './FormCard';
import { Form } from './page';

export default function FormCardList({
  forms,
  setShowRespondents,
}: {
  forms: Form[];
  // eslint-disable-next-line no-unused-vars
  setShowRespondents: (form: Form) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {forms
        // descending
        .sort((a, b) => new Date(b.update_at).getTime() - new Date(a.update_at).getTime())
        .map((form, i) => (
          <FormCard
            key={i}
            date={form.update_at}
            id={form.id}
            setShowRespondents={() => setShowRespondents(form)}
            title={form.title}
          />
        ))}
    </div>
  );
}

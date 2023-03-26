import PlusButton from './PlusButton';
import FormCardList from './FormCardList';
import NoForm from './NoForm';

export default function Home() {
  return (
    <>
      <div className="p-8">
        <div className="container relative space-y-8">
          <h5 className="text-lg font-semibold text-neutral-600">Formulir Terbaru</h5>
          {forms.length ? <FormCardList forms={forms} /> : <NoForm />}
        </div>
      </div>
      <PlusButton />
    </>
  );
}

const forms = [
  {
    id: '1',
    title: 'formulir',
    date: Date.now(),
  },
  {
    id: '1',
    title: 'formulir',
    date: Date.now(),
  },
  {
    id: '1',
    title: 'formulir',
    date: Date.now(),
  },
  {
    id: '1',
    title: 'formulir',
    date: Date.now(),
  },
  {
    id: '1',
    title: 'formulir',
    date: Date.now(),
  },
  {
    id: '1',
    title: 'formulir',
    date: Date.now(),
  },
];

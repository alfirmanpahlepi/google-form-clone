import { Form } from './page';
import { Avatar } from '@/components/ui';

export default function Respondents({ data }: { data: Form }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 rounded-md bg-white p-6 shadow">
        <h4 className="text-xl font-semibold">{data.title}</h4>
        <p className="text-gray-500">{data.description}</p>{' '}
      </div>
      {data.questions.map((question, i) => (
        <div key={i} className="rounded-md bg-white p-6 shadow">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold">{question.title}</h4>
            <p className="text-gray-500">{question.description}</p>
          </div>
          <div className="ml-8 mt-3">
            {question.respondents.map((respondent, i) => (
              <div
                key={i}
                className="justify-between space-y-2 p-3 odd:bg-slate-50 lg:flex lg:space-y-0 lg:space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <div>
                    <Avatar imageUrl={respondent.photoUrl} name={respondent.name} />
                  </div>
                  <div>
                    <h6 className="break-all text-sm">{respondent.name}</h6>
                    <p className="break-all text-xs text-gray-500">{respondent.email}</p>
                  </div>
                </div>
                <p>{respondent.response}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

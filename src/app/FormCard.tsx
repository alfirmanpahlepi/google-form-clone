import { limitString } from '@/utils';
import { Menu } from '@headlessui/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormCard({
  id,
  title,
  date,
}: {
  title: string;
  date: string | number;
  id: string;
}) {
  const navigate = useNavigate();

  const dropdownMenu = useMemo(
    () => [
      { name: 'Buka', onClick: (id: string) => navigate('/forms/' + id) },
      { name: 'Edit', onClick: (id: string) => navigate('/forms/' + id) },
      {
        name: 'Salin link URL',
        onClick: (id: string) =>
          navigator.clipboard
            .writeText(window.location.href + id)
            .then(() => alert('URL berhasil disalin'))
            .catch((e) => alert(e)),
      },
      { name: 'Tampilkan data', onClick: (id: string) => navigate('/forms/' + id) },
      { name: 'Hapus', onClick: (id: string) => navigate('/forms/' + id) },
    ],
    [id, navigate],
  );

  return (
    <div className="relative space-y-2 rounded bg-white py-3 px-5 text-sm shadow">
      <p className="text-base font-semibold text-gray-700">{limitString(title, 20)}</p>
      <div className="flex items-center space-x-1">
        <img alt="form" className="h-5 w-5" src="/assets/icons/document.svg" />
        <span className="text-gray-500">Diperbarui {new Date(date).toLocaleString('id-ID')}</span>
      </div>
      <Menu>
        <Menu.Button className="absolute right-1 top-1 cursor-pointer rounded-full p-1 duration-200 hover:bg-gray-100">
          <img alt="dots" className="h-5 w-5" src="/assets/icons/verticalDots.svg" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 z-10 w-40 overflow-hidden rounded bg-white shadow lg:-right-20 lg:top-10">
          <ul className="py-1 text-gray-500">
            {dropdownMenu.map((el, i) => (
              <Menu.Item key={i} as="li">
                <button
                  className="block w-full py-2 px-5 text-left hover:bg-gray-100"
                  onClick={() => el.onClick(id)}
                  type="button"
                >
                  {el.name}
                </button>
              </Menu.Item>
            ))}
          </ul>
        </Menu.Items>
      </Menu>
    </div>
  );
}

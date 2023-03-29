import useAppState from '@/context';
import { deleteFormFirestore } from '@/services/firebase/forms';
import { limitString } from '@/utils';
import { Menu } from '@headlessui/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormCard({ id, title, date }: { title: string; date: string; id: string }) {
  const { modal } = useAppState();

  const navigate = useNavigate();

  function copyURLToClipboard() {
    navigator.clipboard
      .writeText(`${window.location.href}forms/${id}`)
      .then(() => alert('URL berhasil disalin'))
      .catch((e) => alert(e));
  }

  async function deleteForm() {
    try {
      const confirm = window.confirm('are you sure to delete this form?');

      if (!confirm) return;

      modal.openModal();

      await deleteFormFirestore(id);

      alert('success delete form');
    } catch (error) {
      alert((error as Error).message);
    } finally {
      modal.closeModal();
    }
  }

  const dropdownMenu = useMemo(
    () => [
      { name: 'Buka', onClick: () => navigate('/forms/' + id) },
      { name: 'Edit', onClick: () => navigate('/forms/' + id + '?edit=true') },
      { name: 'Salin link URL', onClick: copyURLToClipboard },
      { name: 'Tampilkan data', onClick: () => navigate('/forms/' + id) },
      { name: 'Hapus', onClick: deleteForm },
    ],
    [id, navigate],
  );

  return (
    <div className="relative space-y-2 rounded bg-white py-3 px-5 text-sm shadow">
      <p className="text-base font-semibold text-gray-700">{limitString(title, 20)}</p>
      <div className="flex items-center space-x-1">
        <img alt="form" className="h-5 w-5" src="/assets/icons/document.svg" />
        <span className="text-gray-500">Diperbarui {new Date(date).toLocaleString('en-US')}</span>
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
                  onClick={el.onClick}
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

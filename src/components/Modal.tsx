import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useAppState from '@/context';

export default function Modal() {
  const { modal } = useAppState();

  const { isOpen, closeModal, element } = modal;

  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-10" data-testid="modal" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div aria-hidden="true" className="fixed inset-0 bg-[#0000004D]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as="div"
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {element || <button onClick={closeModal}></button>}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

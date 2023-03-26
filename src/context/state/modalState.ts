import { ReactNode, useState } from 'react';

export default function modalState() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [element, setElement] = useState<ReactNode | undefined>('');

  function openModal(element: ReactNode) {
    setElement(element);
    setIsOpen(true);
  }

  function closeModal() {
    setElement('');
    setIsOpen(false);
  }

  return { isOpen, openModal, closeModal, element };
}

export interface ModalState {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  openModal: (element: ReactNode) => void;
  closeModal: () => void;
  element: ReactNode;
}

export const initialModalState: ModalState = {
  isOpen: false,
  openModal: () => alert('modalState: unhandled function'),
  closeModal: () => alert('modalState: unhandled function'),
  element: '',
};

import Modal from '../Modal.tsx';
import React from 'react';

interface AlertDialogProps {
  isOpen: boolean,
  closeModal: () => void,
  title: string,
  message: string,
  confirmNavigation: () => void,
}

const Alert = ({ isOpen, closeModal, title, message, confirmNavigation }: AlertDialogProps) => {
  const confirm = () => {
    closeModal();
    confirmNavigation();
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1>{title}</h1>
      <p>{message}</p>
      <button onClick={closeModal}>취소</button>
      <button onClick={confirm}>확인</button>
    </Modal>
  )
}

export default Alert
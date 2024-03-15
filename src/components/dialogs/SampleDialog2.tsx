import Modal from '../Modal.tsx';
import React from 'react';

interface SampleDialogProps {
  isOpen: boolean,
  closeModal: () => void,
  openModal?: () => void,
}

const SampleDialog2 = ({ isOpen, closeModal }: SampleDialogProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1>모달2</h1>
      <p>여기에 내용을 채워넣으세요.</p>
      <button onClick={closeModal}>닫기</button>
    </Modal>
  )
}

export default SampleDialog2
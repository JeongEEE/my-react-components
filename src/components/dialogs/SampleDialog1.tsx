import Modal from '../Modal.tsx';
import React from 'react';

interface SampleDialogProps {
  isOpen: boolean,
  closeModal: () => void,
  openModal?: () => void,
}

const SampleDialog = ({ isOpen, closeModal, openModal }: SampleDialogProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1>모달1</h1>
      <p>여기에 내용을 채워넣으세요.</p>
      <button onClick={openModal}>모달1열기</button>
      <button onClick={closeModal}>닫기</button>
    </Modal>
  )
}

export default SampleDialog
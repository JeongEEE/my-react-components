import { useRecoilState } from 'recoil';
import { modalStackState } from '../states/atoms.ts';
import {ModalProps} from '../types';

export function useModal() {
  const [modals, setModals] = useRecoilState(modalStackState);

  const showModal = (modalProps: Omit<ModalProps, 'id'>) => {
    setModals(currentModals => [
      ...currentModals,
      { ...modalProps, id: Date.now() + Math.random() } // 모달에 고유 ID 부여
    ]);
  };

  const closeModal = (id: number) => {
    setModals(currentModals => currentModals.filter(modal => modal.id !== id));
  };

  return { showModal, closeModal };
}

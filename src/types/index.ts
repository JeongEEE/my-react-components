import React from 'react';

export interface ModalProps {
  id: number; // 모달 고유 ID
  title: string;
  message: string;
  okHandler: () => void;
  cancel: boolean;
}

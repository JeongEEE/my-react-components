import React, {useEffect} from 'react';
import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil';
import { modalStackState } from '../states/atoms.ts';
import { useModal } from '../hooks/useModal.ts';
import {global} from '../styles/global.ts';

const overlayStyle = (props: any) => css`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: ${props.index === 0 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
  z-index: ${props.zIndex};
`

const ModalOverlay: React.FC<{ onClose: () => void; index:number, zIndex: number }> = ({ onClose, index, zIndex }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링을 막습니다.
    onClose();
  };

  return (
    <div css={overlayStyle({index, zIndex})} onClick={handleClick} />
  );
};

const Modal: React.FC = () => {
  const modals = useRecoilValue(modalStackState);
  const { closeModal } = useModal(); // 이 부분이 수정되었습니다.

  if (modals.length === 0) return null;

  return (
    <>
      {modals.map((modal, index) => (
        <React.Fragment key={index}>
          <ModalOverlay onClose={() => closeModal(modal.id)} index={index} zIndex={1000 + index} />
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '30px', zIndex: 1000 + index + 1 }}>
            <h2>{modal.title}</h2>
            <p css={css`margin: 25px 0;`}>{modal.message}</p>
            <button css={css`${global.btn};width: 8rem;height: 2.5rem;margin-right: 4px;`}
                    onClick={() => { modal.okHandler(); closeModal(modal.id); }}>확인</button>
            {modal.cancel && <button css={css`${global.btn};width: 8rem;height: 2.5rem;`}
                                     onClick={() => closeModal(modal.id)}>취소</button>}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Modal;

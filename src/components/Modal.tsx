import ReactDOM from "react-dom";
import { css } from '@emotion/react'

const modalOverlay = css`
  background-color: rgba(0, 0, 0, 0.4);width: 100%;height: 100vh;z-index: 10;
  position: fixed;top: 0;left: 0;
`
const modalWrap = css`
  width: 360px;max-width:700px;height: 330px;overflow:auto;z-index: 100;position: absolute;
  top: 50%;left: 50%;transform: translate(-50%, -50%);background-color: white;padding: 15px;
  border-radius: 10px;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`

const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  const close = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  }

  const content = (
    <div css={modalOverlay} onClick={close}>
      <div className="modal" css={modalWrap}>{children}</div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('root')!);
};

export default Modal
import { css } from '@emotion/react'
import { useRecoilValue } from 'recoil';
import {toastState} from '../states/atoms.ts';
import ReactDOM from 'react-dom';

const toastStyle = css`
  background: black;color: white;padding: 10px 40px;border-radius: 6px;z-index: 1000;margin-bottom: 5px;
`

const ToastProvider = () => {
  const toasts = useRecoilValue(toastState);

  const content = (
    <div css={css`position: absolute; top: 20px;left: 50%;transform: translateX(-50%);z-index: 9999;`}>
      {toasts.map((toast) => (
        <div key={toast.id} css={toastStyle}>
          {toast.message}
        </div>
      ))}
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('root')!);
}

export default ToastProvider
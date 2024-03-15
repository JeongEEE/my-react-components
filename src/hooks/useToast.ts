import { useSetRecoilState } from 'recoil';
import {ToastMessage, toastState} from '../states/atoms.ts';

let toastId = 0;

export function useToast() {
  const setToasts = useSetRecoilState(toastState);

  const addToast = (message: string, duration: number = 3000) => {
    const id = ++toastId;
    setToasts((oldToasts: ToastMessage[]) => [
      ...oldToasts,
      { id, message, duration },
    ]);

    setTimeout(() => {
      setToasts((oldToasts: ToastMessage[]) => oldToasts.filter(toast => toast.id !== id));
    }, duration);
  };

  return addToast;
}

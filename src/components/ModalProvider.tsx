import {useRecoilState} from 'recoil';
import {modalState} from '../states/modal.ts';
import {useEffect} from 'react';

const trapFocus = (element) => {
  // 포커스 트랩 함수, 모달 내에서 실행한다
  const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB: number = 9;

  element.addEventListener('keydown', function(e: React.KeyboardEvent<HTMLImageElement>) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if ( e.shiftKey ) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl!.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl!.focus();
        e.preventDefault();
      }
    }
  });
}

const ModalProvider = () => {
  const [state] = useRecoilState(modalState);
  return (
    <>
      {state.map(({ id, element }) => {
          return <Component key={id} component={element} />;
        })}
    </>
  );
};

const Component = ({ component, ...rest }: { component: React.FC }) => {

  useEffect(() => {
    trapFocus(document.querySelector(".modal")!);
  }, []);

  return component({ ...rest });
};

export default ModalProvider;
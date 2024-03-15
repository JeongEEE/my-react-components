/*
페이지 이탈 방지 NavigationGuard 컴포넌트
페이지 이탈 방지 기능을 사용하려면 해당하는 컴포넌트 안에 선언하면 된다
props값인 active는 가드 활성화 on/off 속성이며 Boolean값으로 제어된다
cancel속성은 페이지 이탈 방지 컨펌 모달을 취소했을 경우 호출한다

다음과 같이 active 변수를 가지고 사용하고자 하는 컴포넌트에 선언하면 된다
<NavigationGuard active={true} />

 */

import { usePrompt } from "../hooks/usePrompt";
import {useEffect} from "react";
import useModal from '../hooks/useModal.ts';
import Alert from './dialogs/Alert.tsx';

const NavigationGuard = ({ active }: { active: boolean }) => {
  const { showPrompt, confirmNavigation, cancelNavigation } = usePrompt(active);

  const alert = useModal(() => {
    const close = () => {
      alert.closeModal();
      cancelNavigation();
    }
    return (
      <Alert isOpen closeModal={close} title={'작성 중인 내용이 있습니다.'}
             message={'이 페이지를 벗어나면\n작성 중인 내용이 사라집니다.\n\n이동하시겠습니까?'}
             confirmNavigation={confirmNavigation} />
    )
  })

  useEffect(() => {
    if(showPrompt) alert.openModal();
  }, [showPrompt]);

  return (
    <div></div>
  );
};

export default NavigationGuard;

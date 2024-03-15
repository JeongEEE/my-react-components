/*
페이지 이탈 방지 훅
react-router-dom v6부터 Prompt를 지원하지 않기 때문에
useBlocker, usePrompt를 직접 선언한다
react-router-dom 6.3.0 설치, 그외의 v.6 버전들은 페이지 이탈방지 구현이 어렵다

Navigator 인터페이스 및 NavigationContextWithBlock 타입 정의:
Navigator 인터페이스는 BaseNavigator를 확장하고, block 메서드를 추가합니다.
block 메서드는 내비게이션을 차단하는 데 사용됩니다.
NavigationContextWithBlock 타입은 NavigationContext의 타입과 navigator 속성을 추가합니다.
이 컨텍스트는 React Router의 내비게이션과 관련된 정보를 제공합니다.
*/

import {ContextType, useCallback, useContext, useEffect, useState} from "react";
import type { Blocker, History, Transition } from "history";
import {
  Navigator as BaseNavigator,
  UNSAFE_NavigationContext as NavigationContext,
  useLocation, useNavigate
} from "react-router-dom";

interface Navigator extends BaseNavigator {
  block: History["block"];
}

type NavigationContextWithBlock = ContextType<typeof NavigationContext> & {
  navigator: Navigator;
};

function useBlocker(blocker: Blocker, when = true) {
  /*
    useBlocker 함수는 내비게이션을 차단하기 위한 것으로, 주어진 blocker 함수를 사용하여 내비게이션을 차단합니다.
    when 매개변수가 true일 때만 내비게이션 차단이 활성화됩니다.
    내비게이션 차단이 설정되면, 주어진 blocker 함수가 실행되고 차단된 내비게이션에 대해 콜백을 수행합니다.
   */
  const { navigator } = useContext(
    NavigationContext
  ) as NavigationContextWithBlock;

  useEffect(() => {
    if (!when) {
      return;
    }

    const unblock = navigator.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        }
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}

export function usePrompt(when: boolean) {
  /*
    usePrompt 함수는 내비게이션에 대한 사용자 프롬프트를 처리하기 위한 것입니다.
    when 매개변수가 true일 때만 프롬프트가 활성화됩니다.
    navigate, location, showPrompt, lastLocation, confirmedNavigation 등의 상태 및 함수를 선언합니다.
    cancelNavigation 함수는 내비게이션을 취소하는 데 사용됩니다.
    handleBlockedNavigation 함수는 내비게이션을 차단하고 프롬프트를 표시합니다.
    confirmNavigation 함수는 프롬프트를 확인하고 내비게이션을 진행합니다.
    useBlocker 훅을 사용하여 내비게이션 차단을 활성화합니다.
    confirmedNavigation 상태가 변경될 때, 마지막 위치로 내비게이션을 다시 실행합니다.
   */
  const navigate = useNavigate();
  const location = useLocation();
  const [showPrompt, setShowPrompt] = useState(false);
  const [lastLocation, setLastLocation] = useState<Transition | null>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false);
  }, []);

  const handleBlockedNavigation = useCallback(
    (tx: Transition) => {
      if (!confirmedNavigation && tx.location.pathname !== location.pathname) {
        setShowPrompt(true);
        setLastLocation(tx);
        return false;
      }
      return true;
    },
    [confirmedNavigation, location.pathname]
  );

  const confirmNavigation = useCallback(() => {
    setShowPrompt(false);
    setConfirmedNavigation(true);
  }, []);

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.location.pathname, { replace: true });
    }
  }, [confirmedNavigation, lastLocation, navigate]);

  useBlocker(handleBlockedNavigation, when);

  return { showPrompt, confirmNavigation, cancelNavigation };
}

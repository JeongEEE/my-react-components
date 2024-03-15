import {useRecoilState} from 'recoil';
import {modalState} from '../states/modal.ts';

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
  return component({ ...rest });
};

export default ModalProvider;
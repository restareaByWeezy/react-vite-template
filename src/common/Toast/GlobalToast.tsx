import { useToastAtoms } from '@/atoms/atom';

import Toast from '.';

const GlobalToast = () => {
  const { isToastOpen, toastInfo } = useToastAtoms();
  return (
    <>
      <Toast
        openToast={isToastOpen}
        title={toastInfo?.title}
        description={toastInfo?.description}
        type={toastInfo?.type}
      />
    </>
  );
};

export default GlobalToast;

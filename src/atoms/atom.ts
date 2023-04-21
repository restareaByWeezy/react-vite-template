import { atom, useAtom } from 'jotai';

export const textAtom = atom('hello');
export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

//TOAST

export const isToastOpenAtom = atom(false);
export const toastInfoAtom = atom<{
  type: 'success' | 'error' | 'info' | 'warning' | undefined;
  description: string | undefined;
  title: string | undefined;
  page: string | undefined;
}>({
  type: undefined,
  description: undefined,
  title: undefined,
  page: undefined,
});

export const useToastAtoms = () => {
  const [isToastOpen, setIsToastOpen] = useAtom(isToastOpenAtom);
  const [toastInfo, setToastInfo] = useAtom(toastInfoAtom);

  const openToast = () => {
    setIsToastOpen(true);
  };
  const closeToast = () => {
    setIsToastOpen(false);
  };

  return {
    isToastOpen,
    setIsToastOpen,
    toastInfo,
    setToastInfo,
    openToast,
    closeToast,
  };
};

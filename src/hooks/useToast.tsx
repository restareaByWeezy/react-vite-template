import { useEffect, useMemo } from 'react';

import { useToastAtoms } from '@/atoms/atom';

interface UseToastProps {
  page?: 'dashboard';
}

const useToast = ({ page }: UseToastProps = {}) => {
  const { closeToast, isToastOpen, openToast, setToastInfo, toastInfo } =
    useToastAtoms();
  useEffect(() => {
    if (toastInfo?.type && toastInfo?.title) {
      openToast();
    }
  }, [closeToast, openToast, toastInfo?.title, toastInfo?.type]);

  //FIX: NEED IMPROVEMENT TOO MANY USEEFFECT
  useEffect(() => {
    const timer = setTimeout(() => {
      if (toastInfo?.title) {
        setToastInfo({
          title: undefined,
          description: undefined,
          type: undefined,
          page: undefined,
        });
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [setToastInfo, toastInfo?.title]);

  useEffect(() => {
    const timer = () => {
      return setTimeout(() => {
        closeToast();
      }, 1500);
    };
    if (isToastOpen) {
      timer();
      clearTimeout(timer());
    }
  }, [closeToast, isToastOpen]);

  const toast = useMemo(
    () => ({
      info: (title?: string, description?: string) => {
        setToastInfo({
          title,
          description,
          type: 'info',
          page: page,
        });
      },

      success: (title?: string, description?: string) => {
        setToastInfo({
          title,
          description,
          type: 'success',
          page: page,
        });
      },

      warning: (title?: string, description?: string) => {
        setToastInfo({
          title,
          description,
          type: 'warning',
          page: page,
        });
      },

      error: (title?: string, description?: string) => {
        setToastInfo({
          title,
          description,
          type: 'error',
          page: page,
        });
      },
    }),
    [page, setToastInfo],
  );
  return { toast };
};

export default useToast;

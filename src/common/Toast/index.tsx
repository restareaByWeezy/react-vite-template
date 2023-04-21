import * as RadixToast from '@radix-ui/react-toast';
import { ReactNode } from 'react';

import * as styles from './styles/toast.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  openToast: boolean;
  handleOpenToast?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  type?: ToastType;
  action?: ReactNode;
  close?: ReactNode | string;
  closeStyle?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  page?: 'dashboard';
}

const Toast = ({
  openToast,
  handleOpenToast,
  title,
  description,
  action,
  close,
  closeStyle,
  type,
  page,
  direction = 'up',
}: ToastProps) => {
  return (
    <RadixToast.Provider duration={1500} swipeDirection={direction}>
      <RadixToast.Root
        className={styles.toastRoot({
          direction: direction || 'right',
        })}
        open={openToast}
        onOpenChange={handleOpenToast}
      >
        <RadixToast.Title className={styles.toastTitle}>
          {title}
        </RadixToast.Title>
        <RadixToast.Description className={styles.toastDescription} asChild>
          {description}
        </RadixToast.Description>
        <RadixToast.Action
          className={styles.ToastAction}
          altText="action"
          asChild
        >
          {action}
        </RadixToast.Action>
        <RadixToast.Close className={closeStyle}>{close}</RadixToast.Close>
      </RadixToast.Root>
      <RadixToast.Viewport
        className={styles.toastViewport({
          direction: direction || 'right',
        })}
      />
    </RadixToast.Provider>
  );
};

export default Toast;

const Provider = RadixToast.Provider;
const Action = RadixToast.Action;
const Close = RadixToast.Close;
const Description = RadixToast.Description;
const Root = RadixToast.Root;
const Title = RadixToast.Title;
const Viewport = RadixToast.Viewport;

export { Action, Close, Description, Provider, Root, Title, Viewport };

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as styles from './Modal.css';

import { Cross2Icon } from '@radix-ui/react-icons';
import Button from '../Button';

interface ModalProps {
  children?: React.ReactNode;
  overlay?: boolean;
  contentClassName?: string;
  trigger: React.ReactNode;
}

const Modal = ({
  children,
  contentClassName,
  trigger,
  overlay,
}: ModalProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Dialog.Portal>
      {overlay && <Dialog.Overlay className={styles.overlay} />}
      <Dialog.Content className={contentClassName || styles.content}>
        {children}
        <Dialog.Close asChild>
          <Button types="default" aria-label="Close">
            <Cross2Icon />
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;

const DialogClose = Dialog.Close;
const DialogTitle = Dialog.Title;
const DialogDescription = Dialog.Description;
const DialogTrigger = Dialog.Trigger;
const CustomModal = Dialog.Root;
const Portal = Dialog.Portal;

export {
  CustomModal,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
};

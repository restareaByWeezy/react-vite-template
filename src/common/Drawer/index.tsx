import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef, ReactNode, Ref } from 'react';

import * as styles from './Drawer.css';

const Drawer = DialogPrimitive.Root;
const DrawerTrigger = DialogPrimitive.Trigger;
type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;

interface DrawerContentProps {
  children: ReactNode;
  ref?: Ref<DialogContentPrimitiveProps>;
  forwardedRef?: Ref<HTMLDivElement> | undefined;
  side?: 'left' | 'right' | 'top' | 'bottom';
  overlay?: boolean;
}

const DrawerContent = forwardRef(
  (
    {
      children,
      side,
      overlay,
      ...props
    }: DrawerContentProps & DialogContentPrimitiveProps,
    forwardedRef,
  ) => (
    <DialogPrimitive.Portal>
      {overlay && <DialogPrimitive.Overlay className={styles.overlay} />}
      <DialogPrimitive.Content
        className={styles.styledContent({ side: side })}
        {...props}
        ref={forwardedRef as Ref<HTMLDivElement> | undefined}
      >
        {children}
        <DialogPrimitive.Close asChild>x</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);

const DrawerClose = DialogPrimitive.Close;
const DrawerTitle = DialogPrimitive.Title;
const DrawerDescription = DialogPrimitive.Description;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
};

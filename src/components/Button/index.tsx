import React, { forwardRef, HTMLAttributes, ReactNode, Ref } from 'react';

import { cx } from '@/styles/classNames';

import { button, ButtonVariantProps } from './Button.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = forwardRef(
  (
    {
      children,
      className,
      color,
      sizes,
      radii,
      outlined,
      types,
      ...rest
    }: ButtonProps & ButtonVariantProps,
    fowardRef,
  ) => {
    return (
      <button
        ref={fowardRef as Ref<HTMLButtonElement> | undefined}
        className={cx(
          button({
            color,
            sizes,
            radii,
            outlined,
            types,
          }),
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default Button;

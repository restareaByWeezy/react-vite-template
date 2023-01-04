import React, { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/styles/classNames';

import { button, ButtonVariantProps } from './Button.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({
  children,
  className,
  color,
  sizes,
  radii,
  outlined,
  types,
  ...rest
}: ButtonProps & ButtonVariantProps) => {
  return (
    <button
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
};

export default Button;

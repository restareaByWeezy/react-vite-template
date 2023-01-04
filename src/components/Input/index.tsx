import React, { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/styles/classNames';

import { input } from './Input.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  className?: string;
}

const Input = ({ children, className, ...rest }: InputProps) => {
  return (
    <input className={cx(input(), className)} {...rest}>
      {children}
    </input>
  );
};

export default Input;

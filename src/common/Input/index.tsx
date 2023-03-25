import React, { HTMLAttributes } from 'react';

import { cx } from '@/styles/classNames';

import { input } from './Input.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ children, className, ...rest }: InputProps) => {
  return <input className={cx(input(), className)} {...rest} />;
};

export default Input;

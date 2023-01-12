import React, { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/styles/classNames';

import { text, TextVariantProps } from './Text.css';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

const Text = ({
  children,
  className,
  size,
  color,
  weight,
  ...rest
}: TextProps & TextVariantProps) => {
  const baseClassName = cx(text({ size, color, weight }), className);

  switch (size) {
    case 'h1':
      return (
        <h1 className={baseClassName} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={baseClassName} {...rest}>
          {children}
        </h2>
      );
    case 'h4':
      return (
        <h4 className={baseClassName} {...rest}>
          {children}
        </h4>
      );
    default:
      return (
        <span className={baseClassName} {...rest}>
          {children}
        </span>
      );
  }
};

export default Text;

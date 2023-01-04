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
  ...rest
}: TextProps & TextVariantProps) => {
  return (
    <span className={cx(text({ size, color }), className)} {...rest}>
      {children}
    </span>
  );
};

export default Text;

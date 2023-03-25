import { HTMLAttributes } from 'react';

import { cx } from '@/styles/classNames';

import { col, GridVariantProps } from './grid.css';

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Col = ({
  children,
  justify,
  align,
  ...rest
}: ColProps & GridVariantProps) => {
  return (
    <div
      {...rest}
      className={cx(
        col({
          justify: justify,
          align: align,
        }),
        rest.className,
      )}
    >
      {children}
    </div>
  );
};

export default Col;

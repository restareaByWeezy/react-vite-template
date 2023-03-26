import { HTMLAttributes } from 'react';

import { cx } from '@/styles/classNames';

import { GridVariantProps, row } from './grid.css';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const Row = ({
  children,
  justify,
  className,
  align,
  ...rest
}: RowProps & GridVariantProps) => {
  return (
    <div
      {...rest}
      className={cx(
        className,
        row({
          justify: justify,
          align: align,
        }),
      )}
    >
      {children}
    </div>
  );
};

export default Row;

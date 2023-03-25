import { HTMLAttributes } from 'react';

import { GridVariantProps, row } from './grid.css';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  reverse?: boolean;
}

const Row = ({
  children,
  justify,
  align,
  ...rest
}: RowProps & GridVariantProps) => {
  return (
    <div
      {...rest}
      className={row({
        justify: justify,
        align: align,
      })}
    >
      {children}
    </div>
  );
};

export default Row;

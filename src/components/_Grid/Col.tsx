import { HTMLAttributes } from 'react';

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
      className={col({
        justify: justify,
        align: align,
      })}
    >
      {children}
    </div>
  );
};

export default Col;

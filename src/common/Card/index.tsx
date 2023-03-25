import cx from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

import { col } from '../_Grid/grid.css';
import * as styles from './card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

const Card = ({ size, children }: CardProps) => {
  return (
    <div className={cx(styles.wrapper({ size: size }), col())}>{children}</div>
  );
};

export default Card;

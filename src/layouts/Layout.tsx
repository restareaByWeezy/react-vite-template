import { ReactNode } from 'react';

import * as styles from './layoutStyle.css';

interface LayoutProps {
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
}

const Layout = ({ header, main, footer }: LayoutProps) => {
  return (
    <div className={styles.container}>
      {header && <header>{header}</header>}
      {main && <main className={styles.main}>{main}</main>}
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Layout;

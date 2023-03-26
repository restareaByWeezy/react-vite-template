import { ReactNode } from 'react';

import * as styles from './layoutStyle.css';

interface LayoutProps {
  main?: ReactNode;
  topNav?: ReactNode;
  bottomNav?: ReactNode;
}

const Layout = ({ main, topNav, bottomNav }: LayoutProps) => {
  return (
    <div className={styles.container}>
      {topNav && <nav className={styles.topNav}>{topNav}</nav>}
      {main && <main className={styles.main}>{main}</main>}
      {bottomNav && <nav className={styles.bottomNav}>{bottomNav}</nav>}
    </div>
  );
};

export default Layout;

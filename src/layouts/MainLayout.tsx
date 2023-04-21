import * as styles from './mainLayoutStyle.css';

interface MainLayoutProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const MainLayout = ({ header, content, footer }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      {header && <header className={styles.header}>{header}</header>}
      <main className={styles.main}>{content}</main>
      <footer className={styles.footer}>{footer}</footer>
    </div>
  );
};

export default MainLayout;

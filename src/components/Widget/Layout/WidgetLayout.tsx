import { ReactNode } from 'react';

import Col from '@/components/_Grid/Col';
import Card from '@/components/Card';

import WidgetHeader from './WidgetHeader';
import * as styles from './widgetLayout.css';

interface WidgetLayoutProps {
  children: ReactNode;
  title?: string;
}

const WidgetLayout = ({ children, title }: WidgetLayoutProps) => {
  return (
    <Card size="sm">
      <Col className={styles.wrapper}>
        <WidgetHeader title={title} />
        <div className={styles.content}>{children}</div>
      </Col>
    </Card>
  );
};

export default WidgetLayout;

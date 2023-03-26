import React from 'react';

import Col from '@/common/_Grid/Col';
import Row from '@/common/_Grid/Row';
import Text from '@/common/Text/Text';
import { vars } from '@/styles/vars.css';

import * as styles from '../styles/calendarStyle.css';

interface CalendarToolbarProps {
  date: Date;
  onNavigate: (action: any) => void;
}

const CalendarToolbar = ({ date, onNavigate }: CalendarToolbarProps) => {
  console.log(
    '🚀 ~ file: CalendarToolbar.tsx:9 ~ CalendarToolbar ~ date:',
    date,
  );
  // const navigate = (action: any) => {
  //   onNavigate(action);
  // };

  return (
    <Col style={{ gap: vars.space.s16 }} className={styles.toolbar}>
      <Text weight="semiBold" size="h2">
        {`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      </Text>
      <Row justify="between" className={styles.badgeWrapper}>
        <Row style={{ gap: vars.space.s8 }}>
          <Text weight="semiBold" size="h2">
            532,100
          </Text>
          <Text weight="semiBold" size="h2">
            원
          </Text>
        </Row>
        <div>badges</div>
      </Row>
    </Col>
  );
};

export default CalendarToolbar;

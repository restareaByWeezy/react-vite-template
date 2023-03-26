import React from 'react';

import Row from '@/common/_Grid/Row';
import Text from '@/common/Text/Text';

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
    <div className={styles.toolbar}>
      <Text weight="semiBold" size="h2">
        {`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      </Text>
      <Row className={styles.badgeWrapper}>badges</Row>
    </div>
  );
};

export default CalendarToolbar;

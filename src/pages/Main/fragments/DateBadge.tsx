import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ComponentType } from 'react';
import { EventProps } from 'react-big-calendar';

import Row from '@/common/_Grid/Row';
import Text from '@/common/Text/Text';

import * as styles from '../styles/dateBadgeStyle.css';

type DateBadgeProps = ComponentType<EventProps<Event>> & {
  color: string;
  text: string;
};

const DateBadge = ({ color, text }: DateBadgeProps) => {
  return (
    <Row
      style={assignInlineVars({ [styles.badgeBgColor]: color ?? 'gray' })}
      className={styles.badgeWrapper}
    >
      <div>o</div>
      <Text>{text}</Text>
    </Row>
  );
};

export default DateBadge;

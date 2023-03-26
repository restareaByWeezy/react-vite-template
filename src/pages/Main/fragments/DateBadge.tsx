import Row from '@/common/_Grid/Row';
import Text from '@/common/Text/Text';

import * as styles from '../styles/dateBadgeStyle.css';

interface DateBadgeProps {
  color: string;
  text: string;
}

const DateBadge = ({ color, text }: DateBadgeProps) => {
  return (
    <Row className={styles.badgeWrapper}>
      <div>o</div>
      <Text>{text}</Text>
    </Row>
  );
};

export default DateBadge;

import { HeaderProps } from 'react-big-calendar';

import Text from '@/common/Text/Text';

import * as styles from '../styles/calendarStyle.css';

const labelKr: LabelKrType = {
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
  Sun: '일',
};

type LabelKrType = Record<string, string>;

interface CustomCalendarHeaderProps extends HeaderProps {
  label: string;
}

const CalendarHeader = ({ label }: CustomCalendarHeaderProps) => {
  const isSat = label === 'Sat';
  const isSun = label === 'Sun';

  return (
    <Text color={isSat ? 'blue' : isSun ? 'red' : 'secondary'}>
      {labelKr[label]}
    </Text>
  );
};

export default CalendarHeader;

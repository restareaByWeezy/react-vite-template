import '/.yarn/unplugged/react-calendar-virtual-119708930f/node_modules/react-calendar/dist/Calendar.css'; // css import

import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

import * as styles from '../styles/calendarStyle.css';

const Test = () => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState(['2023-03-22']);
  return (
    <Calendar
      onChange={onChange}
      value={value}
      formatDay={(locale, date) => moment(date).format('DD')}
      tileContent={({ date, view }) => {
        let html = [];
        if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
          html.push(<div className="dot"></div>);
        }
        return (
          <>
            <div className={styles.badgeWrapper}>{html}</div>
          </>
        );
      }}
    />
  );
};

export default Test;

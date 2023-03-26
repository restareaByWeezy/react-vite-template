import '/.yarn/unplugged/react-big-calendar-virtual-2c58ff320b/node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/calendarStyle.css';

import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Calendar,
  dayjsLocalizer,
  Event,
  EventProps,
} from 'react-big-calendar';

import CalendarHeader from './CalendarHeader';
import CalendarToolbar from './CalendarToolbar';
import DateBadge from './DateBadge';

type DateBadgeProps = EventProps & {
  color: string;
  text: string;
};

const CustomCalendar = () => {
  dayjs.locale('ko');
  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState<Event[]>([
    {
      title: '철수',
      start: dayjs('2023-03-22').toDate(),
      end: dayjs('2023-03-22').toDate(),
      resource: 'ㅇㅇ',
    },
  ]);

  return (
    <div>
      <Calendar
        view="month"
        onView={(month: string) => {
          return;
        }}
        formats={{
          dateFormat: 'D',
        }}
        defaultDate={new Date()}
        components={{
          toolbar: CalendarToolbar,
          header: CalendarHeader,
        }}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 109px)' }}
      />
    </div>
  );
};

export default CustomCalendar;

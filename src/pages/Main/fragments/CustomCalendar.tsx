import '/.yarn/unplugged/react-big-calendar-virtual-2c58ff320b/node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/calendarStyle.css';

import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar, dayjsLocalizer, Event } from 'react-big-calendar';

import CalendarHeader from './CalendarHeader';
import CalendarToolbar from './CalendarToolbar';

const CustomCalendar = () => {
  dayjs.locale('ko');
  const localizer = dayjsLocalizer(dayjs);

  const [events, setEvents] = useState<Event[]>([
    {
      title: '철수',
      start: new Date(),
      end: new Date(),
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
        defaultDate={new Date()}
        components={{
          toolbar: CalendarToolbar,
          header: CalendarHeader,
        }}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CustomCalendar;

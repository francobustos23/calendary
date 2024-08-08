import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs'

function App() {
  const localizer = dayjsLocalizer(dayjs)

  const events = [
    {
      start: dayjs('2024-5-31T10:00:00').toDate(),
      end: dayjs('2024-5-31T14:00:00').toDate(),
      title: 'Evento 1'
    }
  ]
  return (
    <>
    <div 
    style={{
      height: '90vh',
      width: '70vw',
    }}>
    <Calendar
    localizer={localizer}
    events={events}
    views={['month', 'week', 'day']}
    toolbar={false}
    

    />
    </div>
    
    </>
  )
}

export default App

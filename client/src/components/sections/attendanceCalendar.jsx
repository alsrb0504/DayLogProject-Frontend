import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const AttendanceCalendar = (props) => {
  const events = [];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          start: "",
          center: "title",
          end: "",
        }}
        events={events}
      />
    </div>
  );
};

export default AttendanceCalendar;

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const AttendanceCalendar = (props) => {
  const events = [];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      headerToolbar={{
        start: "",
        center: "title",
        end: "",
      }}
    />
  );
};

export default AttendanceCalendar;

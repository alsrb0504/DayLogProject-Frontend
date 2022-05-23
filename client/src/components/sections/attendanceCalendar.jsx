import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { MakeEmojiEvents } from "../../services/calendar";

const AttendanceCalendar = (props) => {
  const events = MakeEmojiEvents();

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      headerToolbar={{
        start: "",
        center: "title",
        end: "",
      }}
      events={events}
    />
  );
};

export default AttendanceCalendar;

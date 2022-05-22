import AttendanceCalendar from "../sections/attendanceCalendar";
import Button from "./button";

const AttendancePopup = (props) => {
  return (
    <div className="qa-popup attendance-popup">
      <h2 className="qa-popup-title attendance-popup-title">이번달 출석</h2>
      <section className="attendance-popup-main">
        <AttendanceCalendar />
      </section>
      <Button
        text="홈으로"
        color="btn-secondary"
        size="btn-40"
        className="qa-popup-btn"
      />
    </div>
  );
};

export default AttendancePopup;

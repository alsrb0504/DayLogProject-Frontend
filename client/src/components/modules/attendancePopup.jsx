import { useNavigate } from "react-router-dom";
import Button from "./button";
import AttendanceCalendar from "../sections/attendanceCalendar";

const AttendancePopup = (props) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

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
        onClick={goHome}
      />
    </div>
  );
};

export default AttendancePopup;

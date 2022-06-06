import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SetAuthHeader } from "../../../services/auth";
import { printDayInfo } from "../../../services/calcDate";
import AddButton from "../../../components/modules/addButton";
import InputHeader from "../../../components/modules/inputHeader";
import ScheduleSection from "../../../components/sections/scheduleSection";

const ScheduleHome = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const day = searchParams.get("day");

  const moveHome = () => {
    navigate("/");
  };

  const moveAddSchedule = () => {
    navigate(`/schedule/add?date=${date}&day=${day}`);
  };

  // 예외 처리 : url 주소로 "/schedule"로 바로 접속 시, 홈으로 이동.
  useEffect(() => {
    SetAuthHeader();

    if (!date || !day) {
      navigate("/");
    }
  }, [navigate, date, day]);

  return (
    <div className="schedule-home schedule">
      <InputHeader text="홈으로" onClick={moveHome} />
      <h2 className="schedule-date">{printDayInfo({ date, day })}</h2>

      <ScheduleSection />

      <div className="schedule-add-btn">
        <AddButton used="schedule" onClick={moveAddSchedule} />
      </div>
    </div>
  );
};

export default ScheduleHome;

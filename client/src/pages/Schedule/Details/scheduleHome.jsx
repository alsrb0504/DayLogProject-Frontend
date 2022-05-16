import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddButton from "../../../components/modules/addButton";
import InputHeader from "../../../components/modules/inputHeader";
import ScheduleSection from "../../../components/sections/scheduleSection";
import { SetAuthHeader } from "../../../services/auth";
import { printDayInfo } from "../../../services/calcDate";

const ScheduleHome = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
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
    <div>
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

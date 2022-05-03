import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddButton from "../../../components/modules/addButton";
import InputHeader from "../../../components/modules/inputHeader";
import ScheduleSection from "../../../components/sections/scheduleSection";
import { printDayInfo } from "../../../services/calcDate";

const ScheduleHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 확인용
  console.log(location);

  const moveHome = () => {
    navigate("/");
  };

  const moveAddSchedule = () => {
    navigate("/schedule/add");
  };

  // 예외 처리 : url 주소로 "/schedule"로 바로 접속 시,
  // date 정보가 없다면 홈으로 이동.
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [navigate, location.state]);

  return (
    <div>
      <InputHeader text="홈으로" onClick={moveHome} />
      <h2>{printDayInfo(location.state)}</h2>

      <ScheduleSection date={location.state.date} />

      <AddButton used="schedule" onClick={moveAddSchedule} />
    </div>
  );
};

export default ScheduleHome;

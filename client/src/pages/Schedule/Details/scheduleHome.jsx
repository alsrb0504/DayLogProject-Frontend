import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AddButton from "../../../components/modules/addButton";
import InputHeader from "../../../components/modules/inputHeader";
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

      <AddButton used="schedule" onClick={moveAddSchedule} />
    </div>
  );
};

export default ScheduleHome;

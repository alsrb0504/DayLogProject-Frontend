import React from "react";
import { useSelector } from "react-redux";
import ScheduleList from "../modules/schedulelist";

const ScheduleSection = ({ date }) => {
  // console.log(date);

  // 일단은 모든 리스트를 뜨게 하고
  // 추후 전달된 date 를 기준으로 date를 포함한
  // 일정만 뜨도록 변경.

  const schedules = useSelector((state) => state.schedule.month_schedules);

  // console.log(schedules);

  return (
    <section>
      {/* <ul>{schedules && schedules.map((item, idx) => <p>{item.title}</p>)}</ul> */}
      <ScheduleList schedules={schedules} />
    </section>
  );
};

export default ScheduleSection;

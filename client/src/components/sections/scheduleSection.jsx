import React from "react";
import { useSelector } from "react-redux";
import ScheduleList from "../modules/schedulelist";

const ScheduleSection = () => {
  const schedules = useSelector((state) => state.schedule.cur_schedules);

  return (
    <section>
      <ScheduleList schedules={schedules} />
    </section>
  );
};

export default ScheduleSection;

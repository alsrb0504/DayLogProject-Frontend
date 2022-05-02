import React from "react";
import ScheduleItem from "./scheduleitem";

const ScheduleList = ({ schedules }) => {
  return (
    <ul>
      {schedules &&
        schedules.map((schedule) => (
          <ScheduleItem key={schedule.schedule_no} schedule={schedule} />
        ))}
    </ul>
  );
};

export default ScheduleList;

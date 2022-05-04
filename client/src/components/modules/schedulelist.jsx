import React from "react";
import ScheduleItem from "./scheduleitem";

const ScheduleList = ({ schedules }) => {
  return (
    <ul className="schedule-container">
      {schedules &&
        schedules.map((schedule, idx) => (
          <ScheduleItem
            key={schedule.schedule_no}
            schedule={schedule}
            color={idx % 3}
          />
        ))}
    </ul>
  );
};

export default ScheduleList;

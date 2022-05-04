import React from "react";
import ScheduleItem from "./scheduleitem";
import EmptyText from "./emptyText";

const ScheduleList = ({ schedules }) => {
  console.log(schedules);
  console.log(typeof schedules);

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
      {!schedules.length && (
        <EmptyText text="일정이 없습니다. <br/> 일정을 추가해 보세요." />
      )}
    </ul>
  );
};

export default ScheduleList;

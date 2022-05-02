import React from "react";
import delete_icon from "../../assets/icons/delete.svg";

const ScheduleItem = ({ schedule }) => {
  return (
    <li>
      <div className="text-area">
        <h3>{schedule.title}</h3>
        <span>{`${schedule.start_date} ~ ${schedule.end_date}`}</span>
      </div>
      <button style={{ backgroundColor: "powderblue" }}>
        <img src={delete_icon} alt="" />
      </button>
    </li>
  );
};

export default ScheduleItem;

import React from "react";
import { useDispatch } from "react-redux";
import delete_icon from "../../assets/icons/delete.svg";
import { RemoveScheduleAsync } from "../../store/actions/schedule";

const ScheduleItem = ({ schedule }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(schedule.schedule_no);
    dispatch(RemoveScheduleAsync(schedule.schedule_no));
  };

  return (
    <li>
      <div className="text-area">
        <h3>{schedule.title}</h3>
        <span>{`${schedule.start_date} ~ ${schedule.end_date}`}</span>
      </div>
      <button onClick={handleClick} style={{ backgroundColor: "powderblue" }}>
        <img src={delete_icon} alt="" />
      </button>
    </li>
  );
};

export default ScheduleItem;

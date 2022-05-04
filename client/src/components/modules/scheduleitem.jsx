import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import delete_icon from "../../assets/icons/delete.svg";
import { RemoveScheduleAsync } from "../../store/actions/schedule";

const ScheduleItem = ({ schedule }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const date = useSelector((state) => state.schedule.cur_date);
  const day = useSelector((state) => state.schedule.cur_day);

  const handleClick = () => {
    navigate(`/schedule/description?date=${date}&day=${day}`, {
      state: {
        schedule: schedule,
      },
    });
  };

  const handleRemove = () => {
    dispatch(RemoveScheduleAsync(schedule.schedule_no));
  };

  return (
    <li>
      <div className="text-area" onClick={handleClick}>
        <h3>{schedule.title}</h3>
        <span>{`${schedule.start_date} ~ ${schedule.end_date}`}</span>
      </div>
      <button onClick={handleRemove} style={{ backgroundColor: "powderblue" }}>
        <img src={delete_icon} alt="" />
      </button>
    </li>
  );
};

export default ScheduleItem;

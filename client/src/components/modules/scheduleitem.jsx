import React from "react";
import delete_icon from "../../assets/icons/delete.svg";
import delete_icon_black from "../../assets/icons/delete-icon-black.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RemoveScheduleAsync } from "../../store/actions/schedule";

const ScheduleItem = ({ schedule, color }) => {
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
    <li className={`schedule-item schedule-item-${color}`}>
      <div className="schedule-item-text" onClick={handleClick}>
        <h3 className="schedule-item-title">{schedule.title}</h3>
        <span className="schedule-item-date">{`${schedule.start_date} ~ ${schedule.end_date}`}</span>
      </div>
      <button className="schedule-item-delete-btn" onClick={handleRemove}>
        {color === 2 ? (
          <img src={delete_icon_black} alt="검은 지우기 아이콘" />
        ) : (
          <img src={delete_icon} alt="지우기 아이콘" />
        )}
      </button>
    </li>
  );
};

export default ScheduleItem;

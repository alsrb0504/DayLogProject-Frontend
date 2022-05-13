import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { printDayInfoForDate } from "../../services/calcDate";
import { SelectDiaryAsync } from "../../store/actions/diary";

const DiaryItem = ({ diary, idx }) => {
  // 클릭 시 이동은 추후 구현.

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveDiaryDesc = () => {
    dispatch(SelectDiaryAsync(diary.diary_no));

    // navigate("/diary/description");
    // 이동은 redux에서 처리
  };

  return (
    <li
      onClick={moveDiaryDesc}
      className={`cur-diary-item cur-diary-item-${idx % 3}`}
    >
      <div className="cur-diary-item-text">
        <span className="cur-diary-item-date">
          {printDayInfoForDate(diary.date)}
        </span>
        <p className="cur-diary-item-content">{diary.content}</p>
      </div>
      {/* <div>{diary.emotion}</div> */}
    </li>
  );
};

export default DiaryItem;

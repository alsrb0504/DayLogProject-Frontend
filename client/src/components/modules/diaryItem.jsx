import React from "react";
import { printDayInfoForDate } from "../../services/calcDate";

const DiaryItem = ({ diary, idx }) => {
  // 클릭 시 이동은 추후 구현.

  return (
    <li className={`cur-diary-item cur-diary-item-${idx % 3}`}>
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

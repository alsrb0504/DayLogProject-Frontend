import React from "react";
import { printDayInfoForDate } from "../../services/calcDate";

const DiaryItem = ({ idx, diary }) => {
  // 클릭 시 이동은 추후 구현.

  return (
    <li>
      <div>
        <span>{printDayInfoForDate(diary.date)}</span>
        <p>{diary.content}</p>
      </div>
      <div>{diary.emotion}</div>
    </li>
  );
};

export default DiaryItem;

import React from "react";
import { useSelector } from "react-redux";
import DiaryItem from "../modules/diaryItem";

const CurrentDiarySection = ({ selectedDate }) => {
  const cur_dairys = useSelector((state) => state.diary.current_diary);

  console.log(cur_dairys);

  return (
    <section className="current-diary">
      <h2 className="current-diary-title">최근 일기</h2>

      <ul className="current-diary-container">
        {cur_dairys.map((diary, idx) => (
          <DiaryItem key={idx} idx={idx} diary={diary} />
        ))}
      </ul>
    </section>
  );
};

export default CurrentDiarySection;

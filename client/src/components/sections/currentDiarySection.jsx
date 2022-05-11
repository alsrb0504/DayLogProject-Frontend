import React from "react";
import { useSelector } from "react-redux";
import DiaryItem from "../modules/diaryItem";

const CurrentDiarySection = ({ selectedDate }) => {
  const cur_dairys = useSelector((state) => state.diary.current_diary);

  console.log(cur_dairys);

  return (
    <section className="home-bottom-date">
      <h2>최근 일기</h2>

      <ul>
        {cur_dairys.map((diary) => (
          <DiaryItem idx={diary.diary_no} diary={diary} />
        ))}
      </ul>
    </section>
  );
};

export default CurrentDiarySection;

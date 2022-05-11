import React from "react";
import { useSelector } from "react-redux";
import DiaryItem from "../modules/diaryItem";
import EmptyText from "../modules/emptyText";

const CurrentDiarySection = ({ selectedDate }) => {
  const cur_dairys = useSelector((state) => state.diary.current_diary);

  const isEmpty = cur_dairys.length == 0 ? true : false;

  return (
    <section className="current-diary">
      <h2 className="current-diary-title">최근 일기</h2>

      <ul className="current-diary-container">
        {cur_dairys.map((diary, idx) => (
          <DiaryItem key={idx} idx={idx} diary={diary} />
        ))}

        {isEmpty && <EmptyText text="최근에 작성한 일기가 없습니다." />}
      </ul>
    </section>
  );
};

export default CurrentDiarySection;

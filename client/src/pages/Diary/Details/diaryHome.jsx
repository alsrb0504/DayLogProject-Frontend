import React, { useEffect, useState } from "react";
import CircularButton from "../../../components/modules/circularButton";
import GlobalHeader from "../../../components/modules/globalHeader";
import DiaryCalendarWrapper from "../../../components/sections/diaryCalendarWrapper";
import add_btn_primary from "../../../assets/icons/plus-icon-primary.svg";
import delete_icon_white from "../../../assets/icons/close-icon-white.svg";
import { toDayInfo, toDayYYMM } from "../../../services/calcDate";
import { useNavigate } from "react-router-dom";
import CurrentDiarySection from "../../../components/sections/currentDiarySection";
import { useDispatch } from "react-redux";
import { RequestDiaryAsync } from "../../../store/actions/diary";

const DiaryHome = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isToggle, setIsToggle] = useState(true);

  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  const moveAdd = () => {
    navigate("/diary/add");
  };

  // 처음 한 번만 일기 정보를 요청하도록 구현
  useEffect(() => {
    const { yy, mm } = toDayYYMM();
    dispatch(RequestDiaryAsync(yy, Number(mm)));
  }, []);

  return (
    <>
      <GlobalHeader />
      <DiaryCalendarWrapper
        setIsToggle={setIsToggle}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      <CurrentDiarySection selectedDate={selectedDate} />

      {isToggle && (
        <section className="btns-section">
          <CircularButton icon={add_btn_primary} onClick={moveAdd} />
          <CircularButton
            icon={delete_icon_white}
            onClick={() => setIsToggle(false)}
            option="circle-btn-delete"
          />
        </section>
      )}
    </>
  );
};

export default DiaryHome;

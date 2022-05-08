import React, { useState } from "react";
import CircularButton from "../../../components/modules/circularButton";
import GlobalHeader from "../../../components/modules/globalHeader";
import DiaryCalendarWrapper from "../../../components/sections/diaryCalendarWrapper";
import DiarySection from "../../../components/sections/diarySection";
import add_btn_primary from "../../../assets/icons/plus-icon-primary.svg";
import delete_icon_white from "../../../assets/icons/close-icon-white.svg";
import { printDayInfo, toDayInfo } from "../../../services/calcDate";
import { useNavigate } from "react-router-dom";

const DiaryHome = (props) => {
  const navigate = useNavigate();

  const [isToggle, setIsToggle] = useState(false);

  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  const moveAdd = () => {
    navigate("/diary/add");
  };

  return (
    <>
      <GlobalHeader />
      <DiaryCalendarWrapper
        setIsToggle={setIsToggle}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      <section className="home-bottom-date">
        {printDayInfo(selectedDate)}
      </section>
      <DiarySection />

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
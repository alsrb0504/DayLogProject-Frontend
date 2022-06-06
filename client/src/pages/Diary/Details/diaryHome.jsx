import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetAuthHeader } from "../../../services/auth";
import { RequestDiaryAsync } from "../../../store/actions/diary";
import { useEffect, useState } from "react";
import { toDayInfo, toDayYYMM } from "../../../services/calcDate";
import GlobalHeader from "../../../components/modules/globalHeader";
import CircularButton from "../../../components/modules/circularButton";
import add_btn_primary from "../../../assets/icons/plus-icon-primary.svg";
import delete_icon_white from "../../../assets/icons/close-icon-white.svg";
import CurrentDiarySection from "../../../components/sections/currentDiarySection";
import DiaryCalendarWrapper from "../../../components/sections/diaryCalendarWrapper";

const DiaryHome = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isToggle, setIsToggle] = useState(true);

  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  const moveAdd = () => {
    navigate("/diary/add?prev=diary");
  };

  // 처음 한 번만 일기 정보를 요청하도록 구현
  useEffect(() => {
    SetAuthHeader();

    const { yy, mm } = toDayYYMM();
    dispatch(RequestDiaryAsync(yy, Number(mm)));
  }, [dispatch]);

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

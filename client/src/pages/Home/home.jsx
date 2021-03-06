import { useEffect, useState } from "react";
import GlobalHeader from "../../components/modules/globalHeader";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import TodoSection from "../../components/sections/todoSection";
import CircularButton from "../../components/modules/circularButton";
import TodoPopup from "../../components/sections/todoPopup";
import OverLay from "../../components/modules/overLay";
import todo_icon from "../../assets/icons/todo.svg";
import schedule_icon from "../../assets/icons/schedule.svg";
import water_icon from "../../assets/icons/water-black.svg";
import delete_icon_white from "../../assets/icons/close-icon-white.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { printDayInfo, toDayInfo } from "../../services/calcDate";
import { CheckLogin, SetAuthHeader } from "../../services/auth";
import { RequestChallengeBadgeAsync } from "../../store/actions/badge";
import { RequestCurrentTodosAsync } from "../../store/actions/todo";
import { RequestCurrentSchedulesAsync } from "../../store/actions/schedule";
import { RequestCurrentCycleAsync } from "../../store/actions/cycle";

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isToggle, setIsToggle] = useState(false);
  const [isTodoPopup, setIsTodoPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  // 홈 화면 이동 시,
  // 로그인 유무 확인.
  // 현재 달의 todo, 일정, 생리, 도전 뱃지 정보 요청.
  useEffect(() => {
    if (!CheckLogin()) {
      navigate("/login");
    } else {
      SetAuthHeader();

      dispatch(RequestCurrentTodosAsync());
      dispatch(RequestCurrentSchedulesAsync());
      dispatch(RequestCurrentCycleAsync());

      dispatch(RequestChallengeBadgeAsync());
    }
  }, [dispatch, navigate]);

  // todo 팝업 오픈 관련 및 화면 이동 함수들
  const openTodoPopup = () => {
    setIsTodoPopup(true);
  };

  const closeTodoPopup = () => {
    setIsTodoPopup(false);
  };

  const moveSchedule = () => {
    navigate(`/schedule?date=${selectedDate.date}&day=${selectedDate.day}`);
  };

  const moveMenstruation = () => {
    navigate("/menstruation");
  };

  return (
    <div>
      {isTodoPopup && <OverLay onClick={closeTodoPopup} />}

      <GlobalHeader />

      <MainCalendarWrapper
        setIsToggle={setIsToggle}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      ></MainCalendarWrapper>

      <section className="home-bottom">
        <h3 className="home-bottom-date">{printDayInfo(selectedDate)}</h3>

        <TodoSection is_home={true} />
      </section>

      {isToggle && (
        <section className="btns-section">
          <CircularButton icon={todo_icon} onClick={openTodoPopup} />
          <CircularButton icon={schedule_icon} onClick={moveSchedule} />
          <CircularButton icon={water_icon} onClick={moveMenstruation} />
          <CircularButton
            icon={delete_icon_white}
            onClick={() => setIsToggle(false)}
            option="circle-btn-delete"
          />
        </section>
      )}

      {isTodoPopup && (
        <TodoPopup
          date_info={printDayInfo(selectedDate)}
          closePopup={closeTodoPopup}
        />
      )}
    </div>
  );
};

export default Home;

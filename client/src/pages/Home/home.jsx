import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalHeader from "../../components/modules/globalHeader";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import TodoSection from "../../components/sections/todoSection";
import CircularButton from "../../components/modules/circularButton";
import TodoPopup from "../../components/sections/todoPopup";
import OverLay from "../../components/modules/overLay";
import todo_icon from "../../assets/icons/todo.svg";
import schedule_icon from "../../assets/icons/schedule.svg";
import water_icon from "../../assets/icons/water-black.svg";
import delete_icon from "../../assets/icons/delete-icon-black-bold.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { printDayInfo, toDayInfo } from "../../services/calcDate";
import { SetAuthHeader } from "../../services/auth";

const Home = (props) => {
  const navigate = useNavigate();

  const [logined, setLogined] = useState(localStorage.getItem("access_token"));

  const [isToggle, setIsToggle] = useState(false);
  const [isTodoPopup, setIsTodoPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  // 월간 Todo 목록.
  const month_todos = useSelector((state) => state.todo.month_todos);
  const select_todos = month_todos.find(
    (daily_todos) => daily_todos.date === selectedDate.date
  );

  // 로그아웃
  // localStrage의 access_token을 지워버림.
  const onLogout = async () => {
    localStorage.clear();

    // 로그아웃 api 호출.
    // 성공 후에 cookie에 refresh 토큰이 없는 것을 확인해야 함.
    await axios.delete("/api/members/logout");

    navigate("/login");
  };
  // ======================================
  //

  // todo 팝업 오픈 관련 및 화면 이동 함수들
  const openTodoPopup = () => {
    setIsTodoPopup(true);
  };

  const closeTodoPopup = () => {
    setIsTodoPopup(false);
  };

  const moveSchedule = () => {
    // navigate("/schedule", { state: selectedDate });
    navigate(`/schedule?date=${selectedDate.date}&day=${selectedDate.day}`);
  };

  const moveMenstruation = () => {
    navigate("/menstruation");
  };
  // ======================================

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

        <TodoSection
          // select_todo가 없다면 undefined 전달
          todos={select_todos && select_todos.todos}
        />
      </section>

      {isToggle && (
        <section className="btns-section">
          <CircularButton icon={todo_icon} onClick={openTodoPopup} />
          <CircularButton icon={schedule_icon} onClick={moveSchedule} />
          <CircularButton icon={water_icon} onClick={moveMenstruation} />
          <CircularButton
            icon={delete_icon}
            onClick={() => setIsToggle(false)}
          />
        </section>
      )}

      {isTodoPopup && (
        <TodoPopup
          date={printDayInfo(selectedDate)}
          dateFormat={selectedDate}
          // select_todo가 없다면 undefined 전달
          todos={select_todos && select_todos.todos}
          closePopup={closeTodoPopup}
        />
      )}
    </div>
  );
};

export default Home;

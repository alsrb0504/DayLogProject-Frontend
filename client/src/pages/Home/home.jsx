import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import axios from "axios";
import TodoSection from "../../components/sections/todoSection";
import CircularButton from "../../components/modules/circularButton";
import TodoPopup from "../../components/sections/todoPopup";
import todo_icon from "../../assets/icons/todo.svg";
import memo_icon from "../../assets/icons/memo.svg";
import water_icon from "../../assets/icons/water-black.svg";
import delete_icon from "../../assets/icons/delete-black.svg";
import {
  changeDayFull,
  printDayInfo,
  toDayInfo,
} from "../../services/calcDate";
import { useSelector } from "react-redux";

const Home = (props) => {
  const [logined, setLogined] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  const [isToggle, setIsToggle] = useState(false);
  const [selectedDate, setSelectedDate] = useState(toDayInfo());

  // 월간 Todo 목록.
  const month_todos = useSelector((state) => state.todo.month_todos);
  const select_todos = month_todos.find(
    (daily_todos) => daily_todos.date === selectedDate.date
  );

  // 캘린더 날짜 클릭 이벤트
  // 날짜 선택 시, 버튼창 뜨도록...
  const onClickDate = (info) => {
    setIsToggle(true);

    const date = info.dateStr;
    const day = info.date.toString().split(" ")[0];
    setSelectedDate({
      date,
      day: changeDayFull(day),
    });
  };

  useEffect(() => {
    // console.log(logined);
  }, [logined]);

  // 로그아웃
  // localStrage의 access_token을 지워버림.
  const onLogout = async () => {
    localStorage.clear();

    // 로그아웃 api 호출.
    // 성공 후에 cookie에 refresh 토큰이 없는 것을 확인해야 함.
    await axios.delete("/api/members/logout");

    navigate("/login");
  };

  //
  // 아이콘 버튼을 통해 이동하는 함수들
  const openTodo = () => {
    // todo 팝업 오픈
  };

  const moveMemo = () => {
    // 일정 관리 페이지 이동
  };

  const moveMenstruation = () => {
    // 생리 설정 페이지 이동
  };

  // 현재 필요없는 코드.
  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <GlobalHeader />

          <MainCalendarWrapper>
            <FullCalendar //
              plugins={[dayGridPlugin, interactionPlugin]}
              headerToolbar={{
                start: "",
                center: "prev title next",
                end: "",
              }}
              eventClick={function () {
                alert("hi");
              }}
              events={[
                {
                  title: "test1",
                  date: "2022-04-20",
                },
              ]}
              dateClick={(info) => {
                onClickDate(info);
              }}
            />
          </MainCalendarWrapper>

          <section className="home-bottom">
            <h3 className="home-bottom-date">{printDayInfo(selectedDate)}</h3>

            <TodoSection
              // select_todo가 없다면 undefined 전달
              todos={select_todos && select_todos.todos}
            />
          </section>

          {isToggle && (
            <section className="btns-section">
              <CircularButton icon={todo_icon} onClick={openTodo} />
              <CircularButton icon={memo_icon} onClick={moveMemo} />
              <CircularButton icon={water_icon} onClick={moveMenstruation} />
              <CircularButton
                icon={delete_icon}
                onClick={() => setIsToggle(false)}
              />
            </section>
          )}

          {/* <TodoPopup
            date={printDayInfo(selectedDate)}
            // select_todo가 없다면 undefined 전달
            todos={select_todos && select_todos.todos}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

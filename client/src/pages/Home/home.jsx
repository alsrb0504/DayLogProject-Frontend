import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import axios from "axios";
import TodoSection from "../../components/sections/todoSection";
import CircularButton from "../../components/modules/circularButton";
import TodoPopup from "../../components/sections/todoPopup";
import todo_icon from "../../assets/icons/todo.svg";
import memo_icon from "../../assets/icons/memo.svg";
import water_icon from "../../assets/icons/water-black.svg";
import delete_icon from "../../assets/icons/delete-black.svg";
import calcDate from "../../services/calcDate";

const Home = (props) => {
  const [logined, setLogined] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  const [selected, setSelected] = useState(true);
  const [selected_date, setSelectedDate] = useState(calcDate());

  const onClickDate = () => {
    // 날짜 선택 시, 버튼창 뜨도록...
    setSelected(!selected);

    // 추가로 선택 날짜 바뀌도록
    // 캘린더에서 날짜 정보 받아야 함.
    // setSelectedDate();
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
              plugins={[dayGridPlugin]}
              headerToolbar={{
                start: "",
                center: "prev title next",
                end: "",
              }}
            />
          </MainCalendarWrapper>

          <section className="home-bottom">
            <TodoSection />
          </section>

          {selected && (
            <section className="btns-section">
              <CircularButton icon={todo_icon} onClick={openTodo} />
              <CircularButton icon={memo_icon} onClick={moveMemo} />
              <CircularButton icon={water_icon} onClick={moveMenstruation} />
              <CircularButton icon={delete_icon} onClick={onClickDate} />
            </section>
          )}

          <TodoPopup date={selected_date} />
        </div>
      </div>
    </div>
  );
};

export default Home;

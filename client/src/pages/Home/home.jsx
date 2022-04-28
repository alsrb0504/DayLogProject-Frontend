import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import MainCalendarWrapper from "../../components/sections/mainCalendarWrapper";
import axios from "axios";
import TodoSection from "../../components/sections/todoSection";

const Home = (props) => {
  const [logined, setLogined] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

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
            {/* <section className="todo-section">
              <h3 className="todo-section-date">2022-04-29</h3>
              <ul className="todo-container">
                <li className="todo-container-item">
                  <div>
                    <span>#</span>
                  </div>
                  <div>투두리스트</div>
                  <span>X</span>
                </li>
              </ul>
            </section> */}
          </section>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Home;

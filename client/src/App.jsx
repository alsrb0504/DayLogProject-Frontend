import "./App.scss";
import Login from "./pages/Login/login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/home";
import { useEffect } from "react";
import axios from "axios";
import SignUp from "./pages/SignUp/signUp";
import SignUpId from "./pages/SignUp/signUpId";
import SignUpPasswd from "./pages/SignUp/signUpPasswd";
import SignUpEmail from "./pages/SignUp/signUpEmail";
import SignUpNickname from "./pages/SignUp/signUpNickname";
import SignUpName from "./pages/SignUp/signUpName";
import Menstruation from "./pages/Menstruation/menstruation";
import Schedule from "./pages/Schedule/schedule";
import ScheduleHome from "./pages/Schedule/Details/scheduleHome";
import ScheduleAdd from "./pages/Schedule/Details/scheduleAdd";
import { SetAuthHeader } from "./services/auth";
import ScheduleDescription from "./pages/Schedule/Details/scheduleDescription";
import Diary from "./pages/Diary/diary";
import DiaryHome from "./pages/Diary/Details/diaryHome";
import DiaryAdd from "./pages/Diary/Details/diaryAdd";
import DiaryDescription from "./pages/Diary/Details/diaryDescription";
import Board from "./pages/Board/board";
import BoardHome from "./pages/Board/Details/boardHome";
import BoardMyPage from "./pages/Board/Details/boardMyPage";
import BoardOther from "./pages/Board/Details/boardOther";
import BoardDescription from "./pages/Board/Details/boardDescription";

function App() {
  const navigate = useNavigate();

  // req.header에 access_token 삽입.
  useEffect(() => {
    SetAuthHeader();
  }, []);

  /*
  useEffect(() => {
    // 처음 접속 : 아예 access_token 이 존재 X
    // => 로그인 페이지로 이동.
    const cur_access_token = localStorage.getItem("access_token");
    if (cur_access_token === null) {
      navigate("/login");
    } else {
      // 자동 로그인
      axios
        .post("/api/autoLogin", {
          access_token: cur_access_token,
        })
        .then((res) => {
          console.log(res.data);
          const { id, name } = res.data;
          console.log(id, name);
        })
        .catch((e) => {
          console.error(e.response.status);
          const err_message = e.response.data.message;

          // Access_token이 만료된 경우
          // refresh 토큰을 이용하여 access 토큰 재발급.
          // 그 외의 경우는 다시 로그인
          // 1. access 토큰이 변조됨.
          // 2. access 토큰이 변조됨.
          // 3. refresh 토큰 만료 or 변조.
          if (e.response.status === 401) {
            axios.get("/api/update").then((res) => {
              console.log(res.data);
              localStorage.setItem("access_token", res.data.AT);
            });
          } else {
            alert(`로그인 오류 ${err_message}`);
            navigate("/login");
          }

          console.log(e.response);
        });
    }
  }, [navigate]);
*/

  return (
    <div className="tablet-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />}>
                <Route index element={<SignUpId />} />
                <Route path="password" element={<SignUpPasswd />} />
                <Route path="email" element={<SignUpEmail />} />
                <Route path="nickname" element={<SignUpNickname />} />
                <Route path="name" element={<SignUpName />} />
              </Route>
              <Route path="/schedule" element={<Schedule />}>
                <Route index element={<ScheduleHome />} />
                <Route path="add" element={<ScheduleAdd />} />
                <Route path="description" element={<ScheduleDescription />} />
              </Route>
              <Route path="/menstruation" element={<Menstruation />} />
              <Route path="/diary" element={<Diary />}>
                <Route index element={<DiaryHome />} />
                <Route path="add" element={<DiaryAdd />} />
                <Route path="description" element={<DiaryDescription />} />
              </Route>
              <Route path="/board" element={<Board />}>
                <Route index element={<BoardHome />} />
                <Route path="mypage" element={<BoardMyPage />} />
                <Route path="other" element={<BoardOther />} />
                <Route path="description" element={<BoardDescription />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

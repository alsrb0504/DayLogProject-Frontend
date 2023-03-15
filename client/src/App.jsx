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
import { AutoLogin, CheckLogin, SetAuthHeader } from "./services/auth";
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
import BadgeHome from "./pages/Badge/badgeHome";
import Attendance from "./pages/Attendance/attendance";
import MyPage from "./pages/Mypage/mypage";
import MypageHome from "./pages/Mypage/Details/mypageHome";
import MypageEdit from "./pages/Mypage/Details/mypageEdit";
import DiaryEdit from "./pages/Diary/Details/diaryEdit";
import MypagePasswd from "./pages/Mypage/Details/mypagePasswd";

function App() {
  const navigate = useNavigate();

  // req.header에 access_token 삽입.
  useEffect(() => {
    if (CheckLogin()) {
      SetAuthHeader();
      AutoLogin(navigate);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="tablet-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/attendance" element={<Attendance />} />
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
                <Route path="edit" element={<DiaryEdit />} />
              </Route>
              <Route path="/board" element={<Board />}>
                <Route index element={<BoardHome />} />
                <Route path="mypage" element={<BoardMyPage />} />
                <Route path="other" element={<BoardOther />} />
                <Route path="description" element={<BoardDescription />} />
              </Route>
              <Route path="/badge" element={<BadgeHome />} />
              <Route path="/mypage" element={<MyPage />}>
                <Route index element={<MypageHome />} />
                <Route path="edit" element={<MypageEdit />} />
                <Route path="changepasswd" element={<MypagePasswd />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

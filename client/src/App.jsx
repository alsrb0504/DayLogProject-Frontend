import "./App.scss";
import Login from "./pages/Login/login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/home";
import SignUp from "./pages/Signup/signUp";
import { useEffect } from "react";
import axios from "axios";
import SignUpId from "./pages/Signup/signUpId";
import SignUpPasswd from "./pages/Signup/signUpPasswd";
import SignUpEmail from "./pages/Signup/signUpEmail";
import SignUpNickname from "./pages/Signup/signUpNickname";
import SignUpName from "./pages/Signup/signUpName";
import Menstruation from "./pages/Menstruation/menstruation";

function App() {
  const navigate = useNavigate();

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
        <Route path="/menstruation" element={<Menstruation />} />
      </Routes>
    </div>
  );
}

export default App;

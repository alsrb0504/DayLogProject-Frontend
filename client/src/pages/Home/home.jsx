import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const [logined, setLogined] = useState(localStorage.getItem("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    console.log(logined);
  }, [logined]);

  // 로그아웃
  // localStrage의 access_token을 지워버림.
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // 현재 필요없는 코드.
  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div className="contain">
      <div className="row">
        <h1>Home page</h1>
        <br />
        <Link to="/login">Move to Login</Link>
        <br />
        <br />
        <Link to="/signup">Move to Signup</Link>

        <br />
        <br />
        <br />

        {logined && (
          <button className="btn-primary" onClick={onLogout}>
            Logout
          </button>
        )}
        {!logined && (
          <button className="btn-primary" onClick={onLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

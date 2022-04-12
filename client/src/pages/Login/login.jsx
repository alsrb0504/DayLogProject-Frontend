import React from "react";
import classnames from "classnames";
import Button from "../../components/modules/button";
import logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/sections/loginForm";

const Login = (props) => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="login-container">
          <img className="logo" src={logo} alt="logo 이미지" />

          {/* <div className={classnames("login-top", "col-sm-3")}> */}
          <div className={classnames("login-top")}>
            <LoginForm />
          </div>

          <div className={classnames("login-bottom", "col-sm-2")}>
            <Button
              text="회원가입"
              color="btn-secondary"
              size="btn-40"
              onClick={goToSignup}
            />

            <div className="find-section">
              <button>
                <a>아이디 찾기</a>
              </button>
              <button>
                <a>비밀번호 찾기</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupPasswd } from "../../store/actions/signup";

const SignUpPasswd = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (passwds) => {
    const { password1, password2 } = passwds;

    if (password1 !== password2) {
      alert("비밀번호를 확인하세요.");
      return;
    }

    dispatch(signupPasswd(password1));
    navigate("/signup/email");
  };

  const moveBack = () => {
    navigate("/signup");
  };

  return (
    <section className="signup-container">
      <InputHeader text="아이디" onClick={moveBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                {...register("password1", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "비밀번호가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 30,
                    message: "비밀번호가 너무 깁니다.",
                  },
                })}
              />
              {errors.password1 && (
                <span className="input-error-message">
                  {errors.password1.message}
                </span>
              )}
            </>
          }
          size="col-sm-3 col-md-4"
          label="비밀번호를 입력하세요."
        />

        <InputContainer
          children={
            <>
              <input
                type="password"
                placeholder="비밀번호를 재입력 하세요."
                {...register("password2", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "비밀번호가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 30,
                    message: "비밀번호가 너무 깁니다.",
                  },
                })}
              />
              {errors.password2 && (
                <span className="input-error-message">
                  {errors.password2.message}
                </span>
              )}
            </>
          }
          size="col-sm-3 col-md-4"
          label="비밀번호를 재입력 하세요."
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpPasswd;

import React from "react";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupIdAsync } from "../../store/actions/signup";

const SignUpId = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (id) => {
    // 아이디 중복체크 통신 후,
    // 참일 경우만 다음 단계로 진행.
    dispatch(signupIdAsync(id));
  };

  const navigate = useNavigate();

  const moveBack = () => {
    navigate("/login");
  };

  return (
    <section className="signup-container">
      <InputHeader text="로그인" onClick={moveBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="text"
                {...register("id", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "아이디가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 20,
                    message: "아이디가 너무 깁니다.",
                  },
                })}
                placeholder="아이디를 입력하세요."
              />
              {errors.id && (
                <span className="input-error-message">{errors.id.message}</span>
              )}
            </>
          }
          size="col-sm-3 col-md-4"
          label="아이디를 입력하세요."
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpId;

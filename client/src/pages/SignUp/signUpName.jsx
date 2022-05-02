import React from "react";
import Button from "../../components/modules/button";
import InputHeader from "../../components/modules/inputHeader";
import InputContainer from "../../components/modules/inputContainer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupAsync, signupName } from "../../store/actions/signup";

const SignUpName = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (name) => {
    // 이름 redux에 저장
    dispatch(signupName(name));
    // 이후 회원가입 진행.
    dispatch(signupAsync());
  };

  const moveBack = () => {
    navigate("/signup/nickname");
  };

  return (
    <section className="signup-container">
      <InputHeader text="닉네임" onClick={moveBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                {...register("name", {
                  required: true,
                  maxLength: {
                    value: 30,
                    message: "이름이 너무 깁니다.",
                  },
                })}
              />
              {errors.name && (
                <span className="input-error-message">
                  {errors.name.message}
                </span>
              )}
            </>
          }
          size="col-sm-3 col-md-4"
          label="이름을 입력하세요."
        />

        <Button text="완료" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpName;

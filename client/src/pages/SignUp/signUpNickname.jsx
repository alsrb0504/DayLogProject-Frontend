import React from "react";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupNickname } from "../../store/actions/signup";

const SignUpNickname = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (nickname) => {
    dispatch(signupNickname(nickname));
    navigate("/signup/name");
  };

  const moveBack = () => {
    navigate("/signup/email");
  };

  return (
    <section className="signup-container">
      <InputHeader text="이메일" onClick={moveBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="text"
                placeholder="닉네임을 입력하세요"
                autoFocus={true}
                {...register("nickname", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "닉네임이 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 20,
                    message: "닉네임이 너무 깁니다.",
                  },
                })}
              />
              {errors.nickname && alert(errors.nickname.message)}
            </>
          }
          size="col-sm-3 col-md-4"
          label="닉네임을 입력하세요."
          error={errors.nickname && "input-error"}
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpNickname;

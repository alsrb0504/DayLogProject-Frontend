import React from "react";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupNickname } from "../../store/actions/signup";

const SignUpNickname = (props) => {
  const { register, handleSubmit } = useForm();
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
            <input
              type="text"
              placeholder="닉네임을 입력하세요"
              {...register("nickname", { required: true })}
            />
          }
          size="col-sm-3"
          label="닉네임을 입력하세요."
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpNickname;

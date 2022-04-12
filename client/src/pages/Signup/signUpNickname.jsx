import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import InputContainer from "../../components/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
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
            <input type="text" {...register("nickname", { required: true })} />
          }
          size="col-sm-3"
          label="닉네임을 입력해주세요."
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpNickname;

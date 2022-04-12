import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import InputContainer from "../../components/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { signupAsync, signupName } from "../../store/actions/signup";

const SignUpName = (props) => {
  const { register, handleSubmit } = useForm();
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
            <input type="text" {...register("name", { required: true })} />
          }
          size="col-sm-3"
          label="이름을 입력해주세요."
        />

        <Button text="완료" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpName;

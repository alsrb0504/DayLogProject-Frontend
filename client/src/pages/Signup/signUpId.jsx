import React from "react";
import Button from "../../components/button";
import InputContainer from "../../components/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpId = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // redux의 signUp 부분에 저장 action 실행.
    // 아이디 중복체크 통신
    // 성공 시, redux에 저장 및 비밀번호 페이지로 이동
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
            <input type="text" {...register("id", { required: true })} />
          }
          size="col-sm-3"
          label="아이디"
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpId;

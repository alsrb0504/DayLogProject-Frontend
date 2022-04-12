import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { signupEmail } from "../../store/actions/signup";

const SignUpEmail = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (email) => {
    dispatch(signupEmail(email));
    navigate("/signup/nickname");
  };

  const moveBack = () => {
    navigate("/signup/password");
  };

  return (
    <section className="signup-container">
      <InputHeader text="비밀번호" onClick={moveBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <input type="email" {...register("email", { required: true })} />
          }
          size="col-sm-3"
          label="이메일을 입력해주세요."
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpEmail;

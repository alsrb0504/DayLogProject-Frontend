import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { signupEmail } from "../../store/actions/signup";

const SignUpEmail = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              autoFocus={true}
              {...register("email", { required: true })}
            />
          }
          size="col-sm-3 col-md-4 "
          label="이메일을 입력하세요."
          error={errors.email && "input-error"}
        />

        <Button text="다음" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default SignUpEmail;

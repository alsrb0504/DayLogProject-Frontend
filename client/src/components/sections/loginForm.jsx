import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginActionAync } from "../../store/actions/auth";
import Button from "../modules/button";
import InputContainer from "../modules/inputContainer";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // 로그인
    dispatch(loginActionAync(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer
        children={
          <input
            type="text"
            placeholder="아이디를 입력하세요."
            {...register("id", { required: true })}
          />
        }
      />

      <InputContainer
        children={
          <input
            type="password"
            placeholder="비밀번호를 입력하세요."
            {...register("password", { required: true })}
          />
        }
      />

      <Button text="로그인" type="submit" color="btn-primary" size="btn-40" />
    </form>
  );
};

export default LoginForm;

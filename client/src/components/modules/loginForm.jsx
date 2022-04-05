import { useForm } from "react-hook-form";
import Button from "../button";
import InputContainer from "../inputContainer";
import { useDispatch } from "react-redux";
import { loginActionAync } from "../../store/actions/auth";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // 로그인
    dispatch(loginActionAync(data));
  };

  const onError = () => {
    //
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
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

      <Button
        text="로그인"
        type="btn-primary"
        size="btn-40"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default LoginForm;

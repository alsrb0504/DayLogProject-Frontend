import { useForm } from "react-hook-form";
import Button from "../button";
import InputContainer from "../inputContainer";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 데이터 로그인 api 주소로 전송
    // http://localhost:8000/api/login
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
            {...register("passwd", { required: true })}
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

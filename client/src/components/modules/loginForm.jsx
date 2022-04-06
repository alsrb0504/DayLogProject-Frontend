import { useForm } from "react-hook-form";
import Button from "../button";
import InputContainer from "../inputContainer";
import { useDispatch, useSelector } from "react-redux";
import { loginActionAync } from "../../store/actions/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const login_result = useSelector((state) => state.authReducer.login_result);

  const onSubmit = (data) => {
    // 로그인
    dispatch(loginActionAync(data));
  };

  const navigate = useNavigate();

  // 로그인 완료 처리 2번째 방법
  // store의 변화를 감지해와서 이동.
  useEffect(() => {
    console.log(login_result);
    if (login_result) {
      navigate("/");
    }
  }, [login_result, navigate]);

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

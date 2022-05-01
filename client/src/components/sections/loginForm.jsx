import Button from "../modules/button";
import InputContainer from "../modules/inputContainer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginActionAync } from "../../store/actions/auth";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // 로그인
    dispatch(loginActionAync(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer
        children={
          <>
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              {...register("id", {
                required: true,
                maxLength: {
                  value: 20,
                  message: "아이디가 너무 깁니다.",
                },
              })}
            />
            {errors.id && (
              <span className="input-error-message">{errors.id.message}</span>
            )}
          </>
        }
      />

      <InputContainer
        children={
          <>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              {...register("password", {
                required: true,
                maxLength: {
                  value: 30,
                  message: "비밀번호가 너무 깁니다.",
                },
              })}
            />
            {errors.password && (
              <span className="input-error-message">
                {errors.password.message}
              </span>
            )}
          </>
        }
      />

      <Button text="로그인" type="submit" color="btn-primary" size="btn-40" />
    </form>
  );
};

export default LoginForm;

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Button from "../../components/button";
import InputContainer from "../../components/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { registerActionAsync } from "../../store/actions/auth";

const SignUp = (props) => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);

    dispatch(registerActionAsync(data));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Outlet />
          {/* <section className="signup-container">
            <InputHeader text="로그인" />

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputContainer
                children={
                  <input type="text" {...register("id", { required: true })} />
                }
                size="col-sm-3"
                label="아이디"
              />

              <Button
                text="완료"
                type="submit"
                color="btn-primary"
                size="btn-40"
              />
            </form>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// <InputContainer
//               children={
//                 <input
//                   type="password"
//                   {...register("password", { required: true })}
//                 />
//               }
//               size="col-sm-3"
//               label="비밀번호"
//             />
//             <InputContainer
//               children={
//                 <input type="text" {...register("email", { required: true })} />
//               }
//               size="col-sm-3"
//               label="이메일"
//             />
//             <InputContainer
//               children={
//                 <input
//                   type="text"
//                   {...register("nickname", { required: true })}
//                 />
//               }
//               size="col-sm-3"
//               label="닉네임"
//             />
//             <InputContainer
//               children={
//                 <input type="text" {...register("name", { required: true })} />
//               }
//               size="col-sm-3"
//               label="이름"
//             />

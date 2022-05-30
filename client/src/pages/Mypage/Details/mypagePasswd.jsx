import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputContainer from "../../../components/modules/inputContainer";

const MypagePasswd = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      prev_password: "",
      new_password1: "",
      new_password2: "",
    },
  });

  const watchPasswd_1 = watch("new_password1");
  const watchPasswd_2 = watch("new_password_2");

  const onSubmit = (data) => {
    if (watchPasswd_1 !== watchPasswd_2) {
      alert("새 비밀번호가 서로 다릅니다.");
      reset();
    }

    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="password"
                placeholder="기존 비밀번호"
                autoFocus={true}
                {...register("prev_password", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "비밀번호가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 30,
                    message: "비밀번호가 너무 깁니다.",
                  },
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="기존 비밀번호를 입력하세요."
          error={errors.prev_password && "input-error"}
        />

        <InputContainer
          children={
            <>
              <input
                type="password"
                placeholder="비밀번호 (최소 4자 이상)"
                autoFocus={true}
                {...register("new_password1", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "비밀번호가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 30,
                    message: "비밀번호가 너무 깁니다.",
                  },
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="새 비밀번호를 입력하세요."
          error={errors.new_password1 && "input-error"}
        />

        <InputContainer
          children={
            <>
              <input
                type="password"
                placeholder="비밀번호 확인"
                {...register("new_password2", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "비밀번호가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 30,
                    message: "비밀번호가 너무 깁니다.",
                  },
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="새 비밀번호를 재입력 하세요."
          error={errors.new_password2 && "input-error"}
        />
      </form>
      <Button
        text="완료"
        type="submit"
        color="btn-primary"
        size="btn-40"
        onClick={handleSubmit(onSubmit)}
      />
    </section>
  );
};

export default MypagePasswd;

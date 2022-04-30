import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { changeCycleAsync } from "../../store/actions/cycle";

const Menstruation = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log(start_date, cycle);

    dispatch(changeCycleAsync(data));
    // cycle 입력 숫자로 확인 기능 추가해야 함.
    console.log(data);
  };

  const moveHome = () => {
    navigate("/");
  };

  return (
    <section className="signup-container">
      <InputHeader text="홈으로" onClick={moveHome} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <input
              type="date"
              placeholder="2022.04.30"
              {...register("start_date", { required: true })}
            />
          }
          size="col-sm-3 col-md-4"
          label="시작날짜를 입력하세요."
        />

        <InputContainer
          children={
            <>
              <input
                type="text"
                placeholder="주기를 입력하세요."
                {...register("cycle", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "주기가 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 2,
                    message: "주기가 너무 깁니다.",
                  },
                })}
              />
              {/* {errors.cycle && <span>{errors.cycle.message}</span>} */}
            </>
          }
          size="col-sm-3 col-md-4"
          label="주기를 입력하세요."
        />

        <Button text="저장" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default Menstruation;

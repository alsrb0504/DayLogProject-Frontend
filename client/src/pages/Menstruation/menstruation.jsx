import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";
import { toDayInfo } from "../../services/calcDate";
import { RequestCycleAsync } from "../../store/actions/cycle";

const Menstruation = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(RequestCycleAsync(data));
    // console.log(data);
  };

  const moveHome = () => {
    navigate("/");
  };

  const checkYear = (date) => {
    const cur_date = toDayInfo().date;
    if (cur_date < date) {
      alert("시작일은 현재 날 이후만 선택 가능합니다.");
      return false;
    }

    const year = date.split("-")[0];
    if (year < 2021 || year > 2022) {
      return "년도를 다시 확인해주세요.";
    }
    return true;
  };

  const checkCycle = (date) => {
    if (date < 21 || date > 40) {
      return "주기를 다시 확인해주세요.";
    }
    return true;
  };

  return (
    <section className="signup-container">
      <InputHeader text="홈으로" onClick={moveHome} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="date"
                placeholder="2022-04-30"
                {...register("start_date", {
                  required: "날짜를 선택해주세요.",
                  validate: { checkYear },
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="시작날짜를 입력하세요."
          error={errors.start_date && "input-error"}
        />

        <InputContainer
          children={
            <>
              <input
                type="number"
                placeholder="주기를 입력하세요."
                autoFocus={true}
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
                  validate: { checkCycle },
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="주기를 입력하세요."
          error={errors.cycle && "input-error"}
        />

        <Button text="저장" type="submit" color="btn-primary" size="btn-40" />
      </form>
    </section>
  );
};

export default Menstruation;

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/modules/button";
import InputContainer from "../../components/modules/inputContainer";
import InputHeader from "../../components/modules/inputHeader";

const Menstruation = (props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (start_date, cycle) => {
    console.log(start_date, cycle);
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
            <input
              type="text"
              placeholder="주기를 입력하세요."
              {...register("cycle", { required: true })}
            />
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

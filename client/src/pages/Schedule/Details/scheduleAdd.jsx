import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import InputContainer from "../../../components/modules/inputContainer";
import InputHeader from "../../../components/modules/inputHeader";
import { AddSchedulesAsync } from "../../../store/actions/schedule";

const ScheduleAdd = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const date = searchParams.get("date");
  const day = searchParams.get("day");

  // 일단은 그냥 홈으로 이동
  // date 객체를 옮겨줘야 함.
  const moveBack = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    dispatch(AddSchedulesAsync(data, date, day));
  };

  return (
    <div>
      <InputHeader text="일정 목록으로" onClick={moveBack} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          children={
            <>
              <input
                type="text"
                {...register("title", {
                  required: "일정 제목을 입력해주세요.",
                  minLength: {
                    value: 1,
                    message: "일정이 너무 짧습니다.",
                  },
                  maxLength: {
                    value: 50,
                    message: "일정이 너무 깁니다.",
                  },
                })}
                placeholder="일정 제목"
              />
              {errors.title && (
                <span className="input-error-message">
                  {errors.title.message}
                </span>
              )}
            </>
          }
          size="col-sm-3 col-md-4"
          label="일정 제목을 입력하세요."
        />

        <div>
          <InputContainer
            children={
              <>
                <input
                  type="date"
                  {...register("start_date", {
                    required: "시작 날짜를 선택해주세요.",
                  })}
                  placeholder="시작 날짜"
                />
                {errors.start_date && (
                  <span className="input-error-message">
                    {errors.start_date.message}
                  </span>
                )}
              </>
            }
            size="col-sm-3 col-md-4"
            label="시작 날짜"
          />

          <InputContainer
            children={
              <>
                <input
                  type="date"
                  {...register("end_date", {
                    required: "종료 날짜를 선택해주세요.",
                  })}
                  placeholder="종료 날짜"
                />
                {errors.end_date && (
                  <span className="input-error-message">
                    {errors.end_date.message}
                  </span>
                )}
              </>
            }
            size="col-sm-3 col-md-4"
            label="종료 날짜"
          />
        </div>

        {/* 추후 textarea로 교체 */}
        <InputContainer
          children={
            <>
              <input
                type="text"
                {...register("content", {
                  required: "일정 내용을 기록하세요.",
                })}
                placeholder="일정 내용"
              />
              {errors.content && (
                <span className="input-error-message">
                  {errors.content.message}
                </span>
              )}
            </>
          }
          size="col-sm-3 col-md-4"
          label="일정 내용"
        />
        <button type="submit">완료</button>
      </form>
    </div>
  );
};

export default ScheduleAdd;

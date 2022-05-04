import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputContainer from "../../../components/modules/inputContainer";
import InputHeader from "../../../components/modules/inputHeader";
import InputTextarea from "../../../components/modules/inputTextarea";
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
    navigate(`/schedule?date=${date}&day=${day}`);
  };

  const onSubmit = (data) => {
    dispatch(AddSchedulesAsync(data, date, day));
  };

  return (
    <div>
      <InputHeader text="일정 목록으로" onClick={moveBack} />
      <form className="schedule-form" onSubmit={handleSubmit(onSubmit)}>
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
                    value: 100,
                    message: "일정이 너무 깁니다.",
                  },
                })}
                placeholder="일정 제목"
              />
            </>
          }
          size="col-sm-4 col-md-4"
          label="일정 제목을 입력하세요."
          error={errors.title && "input-error"}
        />

        <div className="schedule-form-date col-sm-4">
          <div className="schedule-form-date-input">
            <InputContainer
              children={
                <>
                  <input
                    type="date"
                    {...register("start_date", {
                      required: "시작 날짜 선택",
                    })}
                    placeholder="시작 날짜"
                  />
                </>
              }
              size="col-sm-4 col-md-4"
              label="시작 날짜"
              error={errors.start_date && "input-error"}
            />
          </div>
          <span className="schedule-form-date-divider">~</span>

          <div className="schedule-form-date-input">
            <InputContainer
              children={
                <>
                  <input
                    type="date"
                    {...register("end_date", {
                      required: "종료 날짜 선택",
                    })}
                    placeholder="종료 날짜"
                  />
                </>
              }
              size="col-sm-4 col-md-4"
              label="종료 날짜"
              error={errors.end_date && "input-error"}
            />
          </div>
        </div>

        <InputTextarea
          children={
            <>
              <textarea
                className="schedule-form-textarea"
                {...register("content", {
                  maxLength: {
                    value: 225,
                    message: "일정 내용이 너무 깁니다.",
                  },
                })}
                placeholder="일정 내용"
              >
                {errors.content && alert(errors.content.message)}
              </textarea>
            </>
          }
        />
      </form>

      <section className="schedule-form-btn-section col-sm-2">
        <Button
          text="취소"
          type="button"
          color="btn-secondary"
          size="btn-40 col-sm-4"
          onClick={moveBack}
        />
        <Button
          text="완료"
          type="submit"
          color="btn-primary"
          size="btn-40 col-sm-4"
          // onClick={handleSubmit(onSubmit)}
        />
      </section>
    </div>
  );
};

export default ScheduleAdd;

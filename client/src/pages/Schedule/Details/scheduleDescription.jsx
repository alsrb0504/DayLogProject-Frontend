import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputContainer from "../../../components/modules/inputContainer";
import InputHeader from "../../../components/modules/inputHeader";
import InputTextarea from "../../../components/modules/inputTextarea";

const ScheduleDescription = (props) => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const schedule = location.state.schedule;
  const date = searchParams.get("date");
  const day = searchParams.get("day");

  console.log(schedule);

  const moveBack = () => {
    navigate(`/schedule?date=${date}&day=${day}`);
  };

  const handleRemove = () => {
    console.log("remove");
  };

  return (
    <div>
      <InputHeader text="일정 목록으로" onClick={moveBack} />
      <main>
        <InputContainer
          children={
            <>
              <input
                type="text"
                value={schedule.title}
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
                  value={schedule.start_date}
                  {...register("start_date", {
                    required: "시작 날짜를 선택해주세요.",
                  })}
                  placeholder="시작 날짜"
                />
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
                  value={schedule.end_date}
                  {...register("end_date", {
                    required: "종료 날짜를 선택해주세요.",
                  })}
                  placeholder="종료 날짜"
                />
              </>
            }
            size="col-sm-3 col-md-4"
            label="종료 날짜"
          />
        </div>

        <InputTextarea
          children={
            <>
              <textarea
                {...register("content", {
                  required: "일정 내용을 기록하세요.",
                })}
                placeholder="일정 내용"
                defaultValue={schedule.content}
              ></textarea>
            </>
          }
        />
      </main>

      <section>
        <Button
          text="편집"
          type="button"
          color="btn-secondary"
          size="btn-40 col-sm-1"
          onClick={moveBack}
        />
        <Button
          text="삭제"
          type="submit"
          color="btn-primary"
          size="btn-40 col-sm-1"
          onClick={handleRemove}
        />
      </section>
    </div>
  );
};

export default ScheduleDescription;

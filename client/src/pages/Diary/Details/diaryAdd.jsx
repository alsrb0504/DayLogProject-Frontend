import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputContainer from "../../../components/modules/inputContainer";
import InputHeader from "../../../components/modules/inputHeader";
import InputTextarea from "../../../components/modules/inputTextarea";
import check_icon from "../../../assets/icons/check.svg";

const DiaryAdd = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const onSubmit = (data) => {
    console.log(check);

    console.log(data);
  };

  const moveBack = () => {
    navigate("/diary");
  };

  return (
    <div>
      <InputHeader text="일기 홈으로" onClick={moveBack} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="schedule-form-date-input">
          <InputContainer
            children={
              <>
                <input
                  type="date"
                  {...register("date", {
                    required: "시작 날짜 선택",
                  })}
                  placeholder="시작 날짜"
                />
              </>
            }
            size="col-sm-2 col-md-4"
            label="날짜를 입력하세요."
            error={errors.date && "input-error"}
          />
        </div>

        <InputTextarea
          children={
            <>
              <textarea
                className="schedule-form-textarea"
                {...register("content", {
                  required: true,
                })}
                placeholder="일정 내용"
              ></textarea>
            </>
          }
          // 추후 일기 내용이 없다면
          // 다른 인풋처럼 border 강조되는 효과 넣을 것.
          // error={errors.date && "input-error"}
        />

        {/* <Button
          text="사진 추가"
          color="btn-primary"
          size="btn-40 col-sm-2"
          type="file"
        /> */}

        <button className="btn-primary btn-40 col-sm-2">
          <input type="file" {...register("file")} />
        </button>

        {/* 체크 아이콘 useState로 상태 관리해서 */}
        {/* form 데이터 이용할 때, 추가해서 사용 */}
        <div>
          <span>사진을 추가하시겠습니까?</span>
          <div onClick={handleCheck} style={{ backgroundColor: "pink" }}>
            {check && <img src={check_icon} alt="check icon" />}
            check
          </div>
        </div>
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
          onClick={handleSubmit(onSubmit)}
        />
      </section>
    </div>
  );
};

export default DiaryAdd;

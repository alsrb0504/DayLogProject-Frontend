import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputContainer from "../../../components/modules/inputContainer";
import InputHeader from "../../../components/modules/inputHeader";
import InputTextarea from "../../../components/modules/inputTextarea";
import check_icon from "../../../assets/icons/check.svg";
import OverLay from "../../../components/modules/overLay";
import EmotionPopup from "../../../components/sections/emotionPopup";

const DiaryAdd = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [check, setCheck] = useState(false);
  const [emotion, setEmotion] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const onSubmit = (data) => {
    // popUp 오픈을 위한 코드
    if (emotion === 0) {
      openEmotionPopup();
      return;
    }

    //
    console.log("check : ", check);
    console.log("emotion : ", emotion);
    console.log("data : ", data);

    // 완료하면 popup 종료
    // 추가 통신
    // 홈으로 이동은 redux에서 처리

    // 일단은 팝업 끄는 걸로
    closeEmotionPopup();
  };

  const moveBack = () => {
    navigate("/diary");
  };

  const openEmotionPopup = () => {
    setOpenPopup(true);
  };

  const closeEmotionPopup = () => {
    setOpenPopup(false);
  };

  // popup에서 handleSubmit을 이용하기 위해
  // 버튼 미리 생성.
  const submitBtn = (
    <Button
      text={emotion === 0 ? "선택" : "완료"}
      type="submit"
      color={emotion === 0 ? "btn-secondary" : "btn-primary"}
      size="btn-40 col-sm-1"
      onClick={handleSubmit(onSubmit)}
    />
  );

  return (
    <div>
      {openPopup && (
        <>
          <OverLay onClick={closeEmotionPopup} />
          <EmotionPopup
            close={closeEmotionPopup}
            emotion={emotion}
            setEmotion={setEmotion}
            submitBtn={submitBtn}
          />
        </>
      )}

      <InputHeader text="일기 홈으로" onClick={moveBack} />

      <form className="diary-form diary-add" onSubmit={handleSubmit(onSubmit)}>
        <div className="diary-form-date-input">
          <InputContainer
            children={
              <>
                <input
                  type="date"
                  placeholder="시작 날짜"
                  {...register("date", {
                    required: "시작 날짜 선택",
                  })}
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
                className={`diary-form-textarea ${
                  errors.content ? "textarea-error" : ""
                }`}
                placeholder="일정 내용"
                {...register("content", {
                  required: true,
                })}
              ></textarea>
            </>
          }
          // 추후 일기 내용이 없다면
          // 다른 인풋처럼 border 강조되는 효과 넣을 것.
          // error={errors.date && "input-error"}
        />

        <button className="diary-form-img-btn btn-secondary btn-40 col-sm-2">
          <span>사진 추가</span>
          <input type="file" accept="image/*" {...register("file")} />
        </button>

        <div className="diary-form-shared col-sm-2">
          <span>공유 하시겠습니까?</span>
          <div className="diary-form-shared-container" onClick={handleCheck}>
            {check && <img src={check_icon} alt="check icon" />}
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

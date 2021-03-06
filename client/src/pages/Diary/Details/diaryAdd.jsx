import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddDiaryAsync } from "../../../store/actions/diary";
import Button from "../../../components/modules/button";
import InputContainer from "../../../components/modules/inputContainer";
import InputHeader from "../../../components/modules/inputHeader";
import InputTextarea from "../../../components/modules/inputTextarea";
import check_icon from "../../../assets/icons/check.svg";
import OverLay from "../../../components/modules/overLay";
import EmotionPopup from "../../../components/sections/emotionPopup";
import { toDayInfo } from "../../../services/calcDate";

const DiaryAdd = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: toDayInfo().date,
      content: "",
      image: null,
      emotion: 0,
    },
  });

  const [shared, setShared] = useState(false);
  const [emotion, setEmotion] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  const handleShared = () => {
    setShared(!shared);
  };

  const onSubmit = (data) => {
    // popUp 오픈을 위한 코드
    if (emotion === 0) {
      openEmotionPopup();
      return;
    }

    const date = data.date;
    const content = data.content;
    const image = data.file[0];

    dispatch(AddDiaryAsync(date, content, image, emotion, shared));
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
    <div className="diary-form-page">
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
                placeholder="일기를 작성하세요."
                {...register("content", {
                  required: true,
                })}
              ></textarea>
            </>
          }
        />

        <button className="diary-form-img-btn btn-secondary btn-40 col-sm-2">
          <span>사진 추가</span>
          <input
            type="file"
            accept=".gif, .jpg, .jpeg, .png"
            {...register("file")}
          />
        </button>

        <div className="diary-form-shared col-sm-2">
          <span>공유 하시겠습니까?</span>
          <div className="diary-form-shared-container" onClick={handleShared}>
            {shared && <img src={check_icon} alt="check icon" />}
          </div>
        </div>
      </form>

      <section className="schedule-form-btn-section col-sm-4">
        <Button
          text="취소"
          type="button"
          color="btn-secondary"
          size="btn-40 col-sm-1"
          onClick={moveBack}
        />
        <Button
          text="완료"
          type="submit"
          color="btn-primary"
          size="btn-40 col-sm-1"
          onClick={handleSubmit(onSubmit)}
        />
      </section>
    </div>
  );
};

export default DiaryAdd;

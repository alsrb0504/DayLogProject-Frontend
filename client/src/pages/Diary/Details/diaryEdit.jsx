import Button from "../../../components/modules/button";
import InputHeader from "../../../components/modules/inputHeader";
import check_icon from "../../../assets/icons/check.svg";
import OverLay from "../../../components/modules/overLay";
import EmotionPopup from "../../../components/sections/emotionPopup";
import { useState } from "react";
import InputContainer from "../../../components/modules/inputContainer";
import InputTextarea from "../../../components/modules/inputTextarea";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DiaryEdit = (props) => {
  const navigate = useNavigate();

  // member_id(pin):"test"
  // date(pin):"2022-05-25"
  // content(pin):"dfdf"
  // emotion(pin):5
  // shared(pin):"false"
  // image_url(pin):null
  // diary_no(pin):236

  const date = useSelector((state) => state.diary.selected_diary.date);
  const content = useSelector((state) => state.diary.selected_diary.content);
  const shared = useSelector((state) => state.diary.selected_diary.shared);
  const emotion = useSelector((state) => state.diary.selected_diary.emotion);
  const image_url = useSelector(
    (state) => state.diary.selected_diary.image_url
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date,
      content,
      shared,
      emotion,
      file: null,
    },
  });

  const [openPopup, setOpenPopup] = useState(false);

  const handleShared = () => {
    // setShared(!shared);
  };

  const onSubmit = (data) => {
    // popUp 오픈을 위한 코드
    // if (emotion === 0) {
    //   openEmotionPopup();
    //   return;
    // }

    const date = data.date;
    const content = data.content;
    const image = data.file[0];

    // dispatch(AddDiaryAsync(date, content, image, emotion, shared));
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

  return (
    <div>
      {openPopup && (
        <>
          <OverLay onClick={closeEmotionPopup} />
          <EmotionPopup
            close={closeEmotionPopup}
            // emotion={emotion}
            // setEmotion={setEmotion}
            // submitBtn={submitBtn}
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
          <div className="diary-form-shared-container" onClick={handleShared}>
            {/* {shared && <img src={check_icon} alt="check icon" />} */}
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

export default DiaryEdit;

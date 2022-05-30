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
import { useDispatch, useSelector } from "react-redux";
import { EditDiaryAsync } from "../../../store/actions/diary";

const DiaryEdit = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    watch,
  } = useForm({
    defaultValues: {
      date,
      content,
      shared,
      emotion,
      file: null,
    },
  });

  const watchContent = watch("content");
  const watchFile = watch("file", null);

  // 주의: 서버에서 받아온 shared가 문자열임.
  const [shareCheck, setShareCheck] = useState(Boolean(shared));
  const [openPopup, setOpenPopup] = useState(false);
  const [newEmotion, setNewEmotion] = useState(emotion);

  const onSubmit = (data) => {
    const edit_diary = {
      edited_date: data.date,
      edited_content: data.content,
      edited_shared: shareCheck,
      edited_emotion: newEmotion,
      edited_image_url: data.file[0],
    };

    dispatch(EditDiaryAsync(edit_diary));
  };

  // 사진 추가 버튼 text 주는 함수.
  const viewImageInfo = () => {
    // 기본 정보
    let image_btn_text = image_url ? "사진 변경" : "사진 추가";

    if (watchFile && watchFile[0] !== undefined) {
      // image_btn_text = URL.createObjectURL(watchFile[0]);
    }

    return image_btn_text;
  };

  const handleShared = () => {
    setShareCheck(!shareCheck);
  };

  const moveBack = () => {
    navigate("/diary/description");
  };

  const openEmotionPopup = () => {
    if (watchContent === "") {
      alert("일기 내용을 작성해주세요.");
      return;
    }

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
            emotion={newEmotion}
            setEmotion={setNewEmotion}
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
        />

        <button className="diary-form-img-btn btn-secondary btn-40 col-sm-2">
          {/* <span>사진 추가</span> */}
          <span>{viewImageInfo()}</span>
          <input type="file" accept="image/*" {...register("file")} />
        </button>

        <div className="diary-form-shared col-sm-2">
          <span>공유 하시겠습니까?</span>
          <div className="diary-form-shared-container" onClick={handleShared}>
            {shareCheck && <img src={check_icon} alt="check icon" />}
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
          onClick={openEmotionPopup}
        />
      </section>
    </div>
  );
};

export default DiaryEdit;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputHeader from "../../../components/modules/inputHeader";
import dummy_image from "../../../assets/img/dummy-image.png";

const DiaryDescription = (props) => {
  const navigate = useNavigate();

  const diary = useSelector((state) => state.diary.selected_diary);
  const { image, shared, content, date, emotion, diary_no } = diary;

  const moveBack = () => {
    navigate("/diary");
  };

  return (
    <div className="diary-desc">
      <InputHeader text="일기 홈으로" onClick={moveBack} />

      <main className="diary-desc-main">
        {image && (
          <div className="diary-desc-main-image">
            <img src={dummy_image} alt="일기 사진" />
          </div>
        )}

        <div className="diary-desc-main-text">
          <textarea
            className={`diary-form-textarea`}
            placeholder="일정 내용"
            defaultValue={content}
          ></textarea>
          <span className="diary-date">{date}</span>
        </div>
      </main>

      <div className="diary-desc-btns">
        <div className="diary-desc-btns-share">
          <Button
            text={`${shared ? "공유 해제" : "공유 설정"}`}
            color="btn-tertiary"
            size="btn-40"
            onClick={() => {}}
          />
        </div>
        <div className="diary-desc-btns-two">
          <Button
            text="편집"
            color="btn-secondary"
            size="btn-40"
            onClick={() => {}}
          />
          <Button
            text="삭제"
            color="btn-primary"
            size="btn-40"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryDescription;

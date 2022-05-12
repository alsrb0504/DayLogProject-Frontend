import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputHeader from "../../../components/modules/inputHeader";
import InputTextarea from "../../../components/modules/inputTextarea";

const DiaryDescription = (props) => {
  const navigate = useNavigate();

  const diary = useSelector((state) => state.diary.selected_diary);
  const { image, shared, content, date, emotion, diary_no } = diary;

  const moveBack = () => {
    navigate("/diary");
  };

  return (
    <div>
      <InputHeader text="일기 홈으로" onClick={moveBack} />

      <main>
        {image && <div>image section</div>}
        <InputTextarea
          children={
            <div>
              <textarea
                className={`diary-form-textarea`}
                placeholder="일정 내용"
                defaultValue={content}
              ></textarea>
              <span>{date}</span>
            </div>
          }
        />
      </main>

      <div>
        <Button
          text={`${shared ? "공유 해제" : "공유 설정"}`}
          color="btn-tertiary"
          size="btn-40 col-sm-2"
          onClick={() => {}}
        />
        <Button
          text="편집"
          color="btn-secondary"
          size="btn-40 col-sm-1"
          onClick={() => {}}
        />
        <Button
          text="삭제"
          color="btn-primary"
          size="btn-40 col-sm-1"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default DiaryDescription;

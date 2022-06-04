import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputHeader from "../../../components/modules/inputHeader";
import dummy_image from "../../../assets/img/dummy-image.png";
import ConfirmPopup from "../../../components/modules/confirmPopup";
import OverLay from "../../../components/modules/overLay";
import {
  RemoveDiaryAsync,
  ChangeShareDiaryAsync,
} from "../../../store/actions/diary";
import { lowDateToDotDate } from "../../../services/calcDate";

const DiaryDescription = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [removePopup, setRemovePopup] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);

  const diary = useSelector((state) => state.diary.selected_diary);
  const { image_url, shared, content, date, emotion, diary_no } = diary;

  const moveBack = () => {
    navigate("/diary");
  };

  const moveEdit = () => {
    navigate("/diary/edit");
  };

  const confirmRemove = () => {
    dispatch(RemoveDiaryAsync(diary_no));
  };

  const confirmShare = () => {
    dispatch(ChangeShareDiaryAsync());

    setSharePopup(false);
  };

  const closeRemovePopup = () => {
    setRemovePopup(false);
  };

  const openRemovePopup = () => {
    setRemovePopup(true);
  };

  const closeSharePopup = () => {
    setSharePopup(false);
  };

  const openSharePopup = () => {
    setSharePopup(true);
  };

  return (
    <div className="diary-desc">
      {removePopup && (
        <>
          <OverLay onClick={closeRemovePopup} />
          <ConfirmPopup
            text="삭제하시겠습니까?"
            close={closeRemovePopup}
            confirm={confirmRemove}
          />
        </>
      )}

      {sharePopup && (
        <>
          <OverLay onClick={closeSharePopup} />
          <ConfirmPopup
            text={`${shared ? "공유해제하시겠습니까?" : "공유하시겠습니까?"}`}
            close={closeSharePopup}
            confirm={confirmShare}
          />
        </>
      )}

      <InputHeader text="일기 홈으로" onClick={moveBack} />

      <main className="diary-desc-main">
        {image_url !== null && (
          <div className="diary-desc-main-image">
            <img src={image_url} alt="일기 사진" />
          </div>
        )}

        <div className="diary-desc-main-text">
          <textarea
            className={`diary-form-textarea`}
            defaultValue={content}
            disabled
          ></textarea>
          <span className="diary-date">{lowDateToDotDate(date)}</span>
        </div>
      </main>

      <div className="diary-desc-btns">
        <div className="diary-desc-btns-share">
          <Button
            text={`${shared !== "false" ? "공유 해제" : "공유 설정"}`}
            color="btn-tertiary"
            size="btn-40"
            onClick={openSharePopup}
          />
        </div>
        <div className="diary-desc-btns-two">
          <Button
            text="편집"
            color="btn-secondary"
            size="btn-40"
            onClick={moveEdit}
          />
          <Button
            text="삭제"
            color="btn-primary"
            size="btn-40"
            onClick={openRemovePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryDescription;

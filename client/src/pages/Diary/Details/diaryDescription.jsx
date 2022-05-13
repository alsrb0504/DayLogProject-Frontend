import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/modules/button";
import InputHeader from "../../../components/modules/inputHeader";
import dummy_image from "../../../assets/img/dummy-image.png";
import ConfirmPopup from "../../../components/modules/confirmPopup";
import OverLay from "../../../components/modules/overLay";

const DiaryDescription = (props) => {
  const navigate = useNavigate();

  const [removePopup, setRemovePopup] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);

  const diary = useSelector((state) => state.diary.selected_diary);
  const { image, shared, content, date, emotion, diary_no } = diary;

  const moveBack = () => {
    navigate("/diary");
  };

  const confirmRemove = () => {
    console.log("remove confirm");
  };

  const confirmShare = () => {
    console.log("share confirm");
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
            confirm={confirmRemove}
          />
        </>
      )}

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
            onClick={openSharePopup}
          />
        </div>
        <div className="diary-desc-btns-two">
          <Button
            text="편집"
            color="btn-secondary"
            size="btn-40"
            onClick={confirmShare}
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

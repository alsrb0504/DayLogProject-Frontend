import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  RemoveDiaryAsync,
  ChangeShareDiaryAsync,
} from "../../../store/actions/diary";
import { lowDateToDotDate } from "../../../services/calcDate";
import Button from "../../../components/modules/button";
import OverLay from "../../../components/modules/overLay";
import InputHeader from "../../../components/modules/inputHeader";
import ConfirmPopup from "../../../components/modules/confirmPopup";

const DiaryDescription = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const prev = searchParams.get("prev");

  const [removePopup, setRemovePopup] = useState(false);
  const [sharePopup, setSharePopup] = useState(false);

  const diary = useSelector((state) => state.diary.selected_diary);
  const { image_url, shared, content, date, diary_no } = diary;

  const moveBack = () => {
    const move_url = `/${prev ? prev : "diary"}`;
    navigate(move_url);
  };

  const moveEdit = () => {
    const move_url = `/diary/edit?prev=${prev ? prev : "diary"}`;
    navigate(move_url);
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
            text={`${
              shared !== "false" ? "공유해제하시겠습니까?" : "공유하시겠습니까?"
            }`}
            close={closeSharePopup}
            confirm={confirmShare}
          />
        </>
      )}

      <InputHeader text="일기 홈으로" onClick={moveBack} />

      <main className="diary-desc-main">
        {image_url !== null && (
          <div className="diary-desc-main-image">
            <img className="fill-image" src={image_url} alt="일기 사진" />
          </div>
        )}

        <div className="diary-desc-main-text">
          <textarea
            className={`diary-form-textarea`}
            defaultValue={content}
            disabled
          ></textarea>
          <span className="diary-date">
            {date ? lowDateToDotDate(date) : ""}
          </span>
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

import Button from "../../../components/modules/button";
import InputHeader from "../../../components/modules/inputHeader";

const DiaryEdit = (props) => {
  return (
    <div className="diary-desc">
      {/* {removePopup && (
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
      )} */}

      <InputHeader text="일기 홈으로" onClick={() => {}} />

      <main className="diary-desc-main">
        {/* {image_url !== null && (
          <div className="diary-desc-main-image">
            <img
              // src={"http://localhost:3001/images/1653402355619_cookie.jpg"}
              src={image_url}
              alt="일기 사진"
            />
          </div>
        )} */}

        <div className="diary-desc-main-text">
          <textarea
            className={`diary-form-textarea`}
            placeholder="일정 내용"
            // defaultValue={content}
          ></textarea>
          {/* <span className="diary-date">{date}</span> */}
          <span className="diary-date">2022-05-39</span>
        </div>
      </main>

      <div className="diary-desc-btns">
        <div className="diary-desc-btns-share">
          <Button
            // text={`${shared !== "false" ? "공유 해제" : "공유 설정"}`}
            text="테스트"
            color="btn-tertiary"
            size="btn-40"
            // onClick={openSharePopup}
          />
        </div>
        <div className="diary-desc-btns-two">
          <Button
            text="편집"
            color="btn-secondary"
            size="btn-40"
            // onClick={confirmShare}
          />
          <Button
            text="삭제"
            color="btn-primary"
            size="btn-40"
            // onClick={openRemovePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryEdit;

import close_btn_icon from "../../assets/icons/close-btn.svg";
import dummy_badge from "../../assets/img/dummy-badge.svg";
import Button from "../modules/button";

const BadgePopup = ({ closePopup }) => {
  return (
    <div className="badge-popup">
      <button className="popup-close-btn" onClick={closePopup}>
        <img src={close_btn_icon} alt="" />
      </button>
      <h2 className="badge-popup-title">뱃지 이름</h2>
      <section className="badge-popup-main">
        <div className="badge-popup-image-container">
          <img src={dummy_badge} alt="더미 뱃지" />
        </div>
        <p className="badge-popup-text">
          뱃지 달성 조건
          <br />
          일기를 10번 썼어요!
        </p>

        <Button
          text="닫기"
          color="btn-secondary"
          size="btn-40"
          className="badge-popup-bottom-btn"
          onClick={closePopup}
        />
      </section>
    </div>
  );
};

export default BadgePopup;

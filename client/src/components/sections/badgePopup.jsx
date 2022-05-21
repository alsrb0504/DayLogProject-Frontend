import close_btn_icon from "../../assets/icons/close-btn.svg";
import dummy_badge from "../../assets/img/dummy-badge.svg";
import Button from "../modules/button";

const BadgePopup = ({ badge, closePopup }) => {
  console.log(badge);

  const {
    badge_no,
    badge_name,
    badge_url,
    challenge,
    description,
    final_count,
    goal_count,
    is_complete,
  } = badge;

  return (
    <div className="badge-popup">
      <button className="popup-close-btn" onClick={closePopup}>
        <img src={close_btn_icon} alt="닫기 버튼" />
      </button>
      <h2 className="badge-popup-title">{badge_name}</h2>
      <section className="badge-popup-main">
        <div className="badge-popup-image-container">
          {/* 추후에 dummy_badge 삭제 */}
          <img
            className={is_complete ? "" : "not-achieve"}
            src={badge_url ? badge_url : dummy_badge}
            alt="뱃지 이미지"
          />
        </div>
        <p className="badge-popup-text">
          뱃지 달성 조건
          <br />
          {description}
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

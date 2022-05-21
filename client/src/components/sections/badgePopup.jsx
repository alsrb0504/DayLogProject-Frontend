import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import close_btn_icon from "../../assets/icons/close-btn.svg";
import dummy_badge from "../../assets/img/dummy-badge.svg";
import { ChangeBadgeStateAsync } from "../../store/actions/badge";
import Button from "../modules/button";

const BadgePopup = ({ closePopup }) => {
  const dispatch = useDispatch();

  const badge = useSelector((state) => state.badge.popup_badge);

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

  useEffect(() => {
    console.log(badge);
  }, [badge]);

  const ChallengeBadge = () => {
    dispatch(ChangeBadgeStateAsync(badge_no));
  };

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
        {is_complete && (
          <p className="badge-popup-text">
            <span>뱃지 달성 조건</span>
            <br />
            {description}
          </p>
        )}
        {/* 달성 못한 경우 현재 카운트 내역 출력 */}
        {!is_complete && (
          <>
            <p className="badge-popup-text">
              <span>뱃지 달성 조건</span>
              <br />
              {description}
            </p>
            <p className="badge-popup-text">
              {goal_count} / {final_count}
            </p>
          </>
        )}

        <Button
          text={is_complete ? "닫기" : challenge ? "도전 중" : "도전하기"}
          color={is_complete ? "btn-secondary" : "btn-primary"}
          size="btn-40"
          className="badge-popup-bottom-btn"
          onClick={is_complete ? closePopup : ChallengeBadge}
        />
      </section>
    </div>
  );
};

export default BadgePopup;

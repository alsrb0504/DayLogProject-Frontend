import { useDispatch } from "react-redux";
import dummy_badge from "../../assets/img/dummy-badge.svg";
import { selectBadge } from "../../store/actions/badge";

const BadgeItem = ({ badge, openPopup }) => {
  const dispatch = useDispatch();
  const { badge_no, badge_name, badge_url, is_complete, challenge } = badge;

  const handleClickBadge = () => {
    dispatch(selectBadge(badge_no));
    openPopup();
  };

  return (
    <li
      className={`badge-item ${is_complete ? "" : "badge-item-not-complete"} ${
        challenge ? "badge-item-challenge" : ""
      }`}
      onClick={handleClickBadge}
    >
      <div className="badge-item-image-box">
        <img
          // 추후 이미지 연결 후 수정
          src={badge_url ? badge_url : dummy_badge}
          alt="뱃지 이미지"
        />
      </div>
      <q className="badge-item-title">{badge_name}</q>
    </li>
  );
};

export default BadgeItem;

import dummy_badge from "../../assets/img/dummy-badge.svg";

const BadgeItem = ({ badge, openPopup }) => {
  const { badge_no, badge_name, badge_url, is_complete } = badge;

  return (
    <li className="badge-item" onClick={openPopup}>
      <div className="badge-item-image-box">
        <img
          className={is_complete ? "" : "is_complete"}
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

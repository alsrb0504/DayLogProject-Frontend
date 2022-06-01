import { useDispatch } from "react-redux";
import { selectBadge } from "../../store/actions/badge";

const BadgeItem = ({ badge, openPopup }) => {
  const dispatch = useDispatch();
  const { badge_no, badge_name, is_complete, challenge } = badge;

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
      <div className={`badge-item-image badge-image-${badge_no}`}></div>
      <q className="badge-item-title">{badge_name}</q>
    </li>
  );
};

export default BadgeItem;

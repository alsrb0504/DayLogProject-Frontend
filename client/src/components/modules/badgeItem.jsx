import React from "react";

import dummy_badge from "../../assets/img/dummy-badge.svg";

const BadgeItem = ({ is_complete }) => {
  return (
    <li className="badge-item">
      <div className="badge-item-image-box">
        {/* <img src={dummy_badge} alt="뱃지 이미지" /> */}

        <img
          className={is_complete ? "" : "is_complete"}
          src={dummy_badge}
          alt="뱃지 이미지"
        />
      </div>
      <q className="badge-item-title">뱃지 이름</q>
    </li>
  );
};

export default BadgeItem;

import React from "react";

import dummy_badge from "../../assets/img/dummy-badge.svg";

const BadgeItem = (props) => {
  return (
    <li>
      <div>
        <img src={dummy_badge} alt="뱃지 이미지" />
      </div>
      <q>뱃지 이름</q>
    </li>
  );
};

export default BadgeItem;

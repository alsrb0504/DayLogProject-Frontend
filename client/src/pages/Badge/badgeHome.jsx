import React from "react";
import GlobalHeader from "../../components/modules/globalHeader";
import trophy_image from "../../assets/img/trophy.svg";
import BadgeItem from "../../components/modules/badgeItem";

const BadgeHome = (props) => {
  return (
    <div className="badge">
      <GlobalHeader />
      <main className="badge-main">
        <div className="badge-trophy">
          <img src={trophy_image} alt="트로피 이미지" />
        </div>
        <ul className="badge-container">
          <BadgeItem />
          <BadgeItem />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem />
          <BadgeItem />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem is_complete={true} />
          <BadgeItem />
          <BadgeItem />
          <BadgeItem />
          <BadgeItem />
        </ul>
      </main>
    </div>
  );
};

export default BadgeHome;

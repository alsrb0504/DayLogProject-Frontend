import React, { useEffect } from "react";
import GlobalHeader from "../../components/modules/globalHeader";
import trophy_image from "../../assets/img/trophy.svg";
import BadgeItem from "../../components/modules/badgeItem";
import BadgePopup from "../../components/sections/badgePopup";
import { useDispatch, useSelector } from "react-redux";
import { RequestBadgeListAsync } from "../../store/actions/badge";

const BadgeHome = (props) => {
  const dispatch = useDispatch();

  const badge_list = useSelector((state) => state.badge.badges);

  useEffect(() => {
    dispatch(RequestBadgeListAsync());
  }, [dispatch]);

  return (
    <div className="badge">
      {/* <BadgePopup /> */}

      <GlobalHeader />
      <main className="badge-main">
        <div className="badge-trophy">
          <img src={trophy_image} alt="트로피 이미지" />
        </div>
        <ul className="badge-container">
          {badge_list.map((badge) => (
            <BadgeItem key={badge.badge_no} badge={badge} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BadgeHome;

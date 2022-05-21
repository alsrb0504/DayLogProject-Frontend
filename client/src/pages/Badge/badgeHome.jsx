import { useEffect, useState } from "react";
import GlobalHeader from "../../components/modules/globalHeader";
import trophy_image from "../../assets/img/trophy.svg";
import BadgeItem from "../../components/modules/badgeItem";
import BadgePopup from "../../components/sections/badgePopup";
import { useDispatch, useSelector } from "react-redux";
import { RequestBadgeListAsync } from "../../store/actions/badge";
import OverLay from "../../components/modules/overLay";

const BadgeHome = (props) => {
  const dispatch = useDispatch();

  const [badgeToggle, setBadgeToggle] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badge_list = useSelector((state) => state.badge.badges);

  useEffect(() => {
    dispatch(RequestBadgeListAsync());
  }, [dispatch]);

  const openPopup = () => {
    setBadgeToggle(true);
  };

  const closePopup = () => {
    setBadgeToggle(false);
  };

  return (
    <div className="badge">
      {badgeToggle && (
        <>
          <OverLay onClick={closePopup} />
          <BadgePopup badge={selectedBadge} closePopup={closePopup} />
        </>
      )}

      <GlobalHeader />
      <main className="badge-main">
        <div className="badge-trophy">
          <img src={trophy_image} alt="트로피 이미지" />
        </div>
        <ul className="badge-container">
          {badge_list.map((badge) => (
            <BadgeItem
              key={badge.badge_no}
              badge={badge}
              openPopup={openPopup}
              selectBadge={setSelectedBadge}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BadgeHome;

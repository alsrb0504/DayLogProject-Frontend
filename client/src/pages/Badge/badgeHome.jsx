import { SetAuthHeader } from "../../services/auth";
import { useEffect, useState } from "react";
import { RequestBadgeListAsync } from "../../store/actions/badge";
import { useDispatch, useSelector } from "react-redux";
import OverLay from "../../components/modules/overLay";
import BadgeItem from "../../components/modules/badgeItem";
import BadgePopup from "../../components/sections/badgePopup";
import GlobalHeader from "../../components/modules/globalHeader";
import trophy_image from "../../assets/img/trophy.svg";
import DummyBadgeItem from "../../components/modules/dummyBadgeItem";

const BadgeHome = (props) => {
  const dispatch = useDispatch();

  const [badgeToggle, setBadgeToggle] = useState(false);
  const badge_list = useSelector((state) => state.badge.badges);

  useEffect(() => {
    SetAuthHeader();
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
          <BadgePopup closePopup={closePopup} />
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
            />
          ))}
          <DummyBadgeItem />
          <DummyBadgeItem />
          <DummyBadgeItem />
        </ul>
      </main>
    </div>
  );
};

export default BadgeHome;

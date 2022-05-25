import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoBold from "../../assets/img/logo-bold.svg";
import menu from "../../assets/icons/menu.svg";
import water from "../../assets/icons/water.svg";
import yellowWater from "../../assets/icons/yellow-water.svg";
import { useDispatch, useSelector } from "react-redux";
import { CYCLE_TOGGLE_CHANGE } from "../../store/actions/types";
import SideSlideNavigation from "../sections/sideSlideNavigation";
import OverLay from "./overLay";

const GlobalHeader = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sidebarToggle, setSidebarToggle] = useState(false);
  const cycleToggle = useSelector((state) => state.cycle.toggled);

  const openSideNavigation = () => {
    setSidebarToggle(true);
  };

  const closeSideNavigation = () => {
    setSidebarToggle(false);
  };

  // 생리 달력 on/off 기능
  // 처음 클릭 시, 설정으로 이동?
  const handleMenstruation = () => {
    if (cycleToggle === "EMPTY") {
      navigate("/menstruation");
    } else {
      dispatch({ type: CYCLE_TOGGLE_CHANGE });
    }
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <>
      <SideSlideNavigation
        isOpen={sidebarToggle}
        closeToggle={closeSideNavigation}
      />
      {sidebarToggle && <OverLay onClick={closeSideNavigation} />}

      <header className="global-header">
        <div className="menu-icon" onClick={openSideNavigation}>
          <img src={menu} alt="메뉴 아이콘" />
        </div>
        <div className="global-header-logo" onClick={handleLogo}>
          <img src={logoBold} alt="로고 이미지" />
        </div>
        <div className="water-icon" onClick={handleMenstruation}>
          {cycleToggle === "ON" ? (
            <img src={yellowWater} alt="생리 달력 on 아이콘" />
          ) : (
            <img src={water} alt="생리 달력 off 아이콘" />
          )}
        </div>
      </header>
    </>
  );
};

export default GlobalHeader;

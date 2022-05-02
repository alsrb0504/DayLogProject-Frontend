import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoBold from "../../assets/img/logo-bold.svg";
import menu from "../../assets/icons/menu.svg";
import water from "../../assets/icons/water.svg";
import yellowWater from "../../assets/icons/yellow-water.svg";
import { useDispatch, useSelector } from "react-redux";
import { CYCLE_TOGGLE_CHANGE } from "../../store/actions/types";

const GlobalHeader = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cycleToggle = useSelector((state) => state.cycle.toggled);

  const handleSideMenu = () => {
    // 사이드 메뉴바 관련 코드
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

  // 추후 홈으로 이동하도록 수정
  const handleLogo = () => {
    // navigate("/");
    navigate("/login");
  };

  return (
    <header className="global-header">
      <div className="menu-icon" onClick={handleSideMenu}>
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
  );
};

export default GlobalHeader;

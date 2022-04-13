import React, { useState } from "react";
import logoBold from "../../assets/img/logo-bold.svg";
import menu from "../../assets/icons/menu.svg";
import water from "../../assets/icons/water.svg";
import yellowWater from "../../assets/icons/yellow-water.svg";
import { useNavigate } from "react-router-dom";

const GlobalHeader = (props) => {
  // 생리 달력 기능 표시를 위한 상태
  // 추후 useSelector로 전환
  const [onMenstruation, setOnMenstruation] = useState(false);

  const handleSideMenu = () => {
    // 사이드 메뉴바 관련 코드
  };

  const handleMenstruation = () => {
    // 생리 달력 on/off 기능
    // 처음 클릭 시, 설정으로 이동?
    setOnMenstruation(!onMenstruation);
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
        {onMenstruation ? (
          <img src={yellowWater} alt="생리 달력 on 아이콘" />
        ) : (
          <img src={water} alt="생리 달력 off 아이콘" />
        )}
      </div>
    </header>
  );
};

export default GlobalHeader;

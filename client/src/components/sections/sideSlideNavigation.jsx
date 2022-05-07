import React from "react";
import MenuWhiteIcon from "../../assets/icons/menu-white.svg";
import DefaultProfile from "../../assets/img/default-profile.svg";

const SideSlideNavigation = (props) => {
  // 추후 유저가 로그인하면 유저 정보를 저장하는 redux 구현
  // 이후 useSelector로 유저의 닉니엠과 프로필 이미지를 가져와서
  // 아래 메뉴들 구성

  return (
    <div>
      <header>
        <button>
          <img src={MenuWhiteIcon} alt="메뉴 접기 아이콘" />
        </button>
        <div>
          <div>
            <img src={DefaultProfile} alt="프로필 사진" />
          </div>
          <span>닉네임</span>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <span>1</span>
          </li>
          <li>
            <span>2</span>
          </li>
          <li>
            <span>3</span>
          </li>
          <li>
            <span>4</span>
          </li>
          <li>
            <span>5</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideSlideNavigation;

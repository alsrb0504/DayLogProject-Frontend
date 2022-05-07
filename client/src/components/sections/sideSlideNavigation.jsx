import React from "react";
import { useNavigate } from "react-router-dom";
import MenuWhiteIcon from "../../assets/icons/menu-white.svg";
import DefaultProfile from "../../assets/img/default-profile.svg";
import NavMenu from "../modules/navMenu";

const SideSlideNavigation = (props) => {
  // 추후 유저가 로그인하면 유저 정보를 저장하는 redux 구현
  // 이후 useSelector로 유저의 닉니엠과 프로필 이미지를 가져와서
  // 아래 메뉴들 구성

  const navigate = useNavigate();

  const moveHome = () => {
    navigate("/");
  };

  const moveDiary = () => {
    alert("구현 중");
    return;
    // navigate("/diary");
  };

  const moveDiet = () => {
    alert("구현 중");
    return;
    // navigate('/diet');
  };

  const moveBadge = () => {
    alert("구현 중");
    return;
    // navigate('/badge');
  };

  const moveBoard = () => {
    alert("구현 중");
    return;
    // navigate('/board');
  };

  const moveMypage = () => {
    alert("구현 중");
    return;
    // navigate('/myPage');
  };

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
          <NavMenu name="홈" move={moveHome} />
          <NavMenu name="일기" move={moveDiary} />
          <NavMenu name="식단" move={moveDiet} />
          <NavMenu name="뱃지 컬렉션" move={moveBadge} />
          <NavMenu name="공유 일기 게시판" move={moveBoard} />
          <NavMenu name="마이 페이지 및 설정" move={moveMypage} />
        </ul>
      </nav>
    </div>
  );
};

export default SideSlideNavigation;

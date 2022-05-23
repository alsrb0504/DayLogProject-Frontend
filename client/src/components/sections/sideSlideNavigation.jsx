import { useNavigate } from "react-router-dom";
import MenuWhiteIcon from "../../assets/icons/menu-white.svg";
import DefaultProfile from "../../assets/img/default-profile.svg";
import NavMenuItem from "../modules/navMenu";

const SideSlideNavigation = ({ isOpen, closeToggle }) => {
  // 추후 유저가 로그인하면 유저 정보를 저장하는 redux 구현
  // 이후 useSelector로 유저의 닉니엠과 프로필 이미지를 가져와서
  // 아래 메뉴들 구성

  const navigate = useNavigate();

  const closeMenu = () => {
    closeToggle();
  };

  const moveHome = () => {
    navigate("/");
    closeToggle();
  };

  const moveDiary = () => {
    navigate("/diary");
    closeToggle();
  };

  const moveDiet = () => {
    alert("구현 중");
    return;
    // navigate('/diet');
  };

  const moveBadge = () => {
    navigate("/badge");
    closeToggle();
  };

  const moveBoard = () => {
    navigate("/board");
    closeToggle();
  };

  const moveMypage = () => {
    navigate("/mypage");
  };

  const onLogout = () => {
    // 추후 로그아웃 기능 추가.
    alert("구현 중");
    return;
  };

  return (
    <div
      className={`slide-bar ${isOpen ? "slide-bar-open" : "slide-bar-close"} `}
    >
      <header className="slide-bar-header">
        <button className="slide-bar-header-menu-icon" onClick={closeMenu}>
          <img src={MenuWhiteIcon} alt="메뉴 접기 아이콘" />
        </button>
        <div className="slide-bar-header-user">
          <div className="slide-bar-header-user-profile">
            <img src={DefaultProfile} alt="프로필 사진" onClick={moveMypage} />
          </div>
          <span className="slide-bar-header-user-name" onClick={moveMypage}>
            닉네임닉네임
          </span>
        </div>
      </header>
      <nav className="slide-bar-nav">
        <ul className="slide-bar-nav-container">
          <NavMenuItem name="홈" onClick={moveHome} />
          <NavMenuItem name="일기" onClick={moveDiary} />
          <NavMenuItem name="식단" onClick={moveDiet} />
          <NavMenuItem name="뱃지 컬렉션" onClick={moveBadge} />
          <NavMenuItem name="공유 일기 게시판" onClick={moveBoard} />
          <NavMenuItem name="마이 페이지 및 설정" onClick={moveMypage} />
          <NavMenuItem name="로그아웃" onClick={onLogout} />
        </ul>
      </nav>
    </div>
  );
};

export default SideSlideNavigation;

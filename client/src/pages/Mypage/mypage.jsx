import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";
import MyPageItem from "../../components/modules/mypageItem";
import OverLay from "../../components/modules/overLay";
import ConfirmPopup from "../../components/modules/confirmPopup";

import default_profile from "../../assets/img/default-profile.svg";

const MyPage = (props) => {
  const navigate = useNavigate();

  const [logoutToggle, setLogoutToggle] = useState(false);
  const [resignToggle, resignLogoutToggle] = useState(false);

  const openLogoutPopup = () => {
    setLogoutToggle(true);
  };

  const closeLogoutPopup = () => {
    setLogoutToggle(false);
  };

  const openResignPopup = () => {
    resignLogoutToggle(true);
  };

  const closeResignPopup = () => {
    resignLogoutToggle(false);
  };

  return (
    <div className="mypage">
      {logoutToggle && (
        <>
          <OverLay onClick={closeLogoutPopup} />
          <ConfirmPopup
            text="로그아웃 하시겠습니까?"
            close={closeLogoutPopup}
            // 추후 로그아웃 연결.
            confirm={() => {}}
          />
        </>
      )}

      {resignToggle && (
        <>
          <OverLay onClick={closeResignPopup} />
          <ConfirmPopup
            text="회원탈퇴 하시겠습니까?"
            close={closeResignPopup}
            // 추후 회원탈퇴 연결.
            confirm={() => {}}
          />
        </>
      )}

      <GlobalHeader />
      <main className="mypage-main">
        <section className="mypage-profile">
          <div className="mypage-profile-img-container">
            <img src={default_profile} alt="" />
          </div>
          <h3 className="mypage-profile-nickname">닉네임</h3>
        </section>

        <ul className="mypage-menu">
          <MyPageItem text="프로필 변경" />
          <MyPageItem text="비밀 번호 변경" />
          <MyPageItem text="로그아웃" onClick={openLogoutPopup} />
          <MyPageItem text="회원 탈퇴" onClick={openResignPopup} />
        </ul>
      </main>
    </div>
  );
};

export default MyPage;

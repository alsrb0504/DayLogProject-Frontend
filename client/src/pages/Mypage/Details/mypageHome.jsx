import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout, ResignRequestAsync } from "../../../store/actions/auth";
import OverLay from "../../../components/modules/overLay";
import MyPageItem from "../../../components/modules/mypageItem";
import ConfirmPopup from "../../../components/modules/confirmPopup";
import default_profile from "../../../assets/img/default-profile.jpeg";

const MypageHome = (props) => {
  const dispatch = useDispatch();

  const nickname = useSelector((state) => state.auth.nickname);
  const profile_image = useSelector((state) => state.auth.profile_image_url);

  const [logoutToggle, setLogoutToggle] = useState(false);
  const [resignToggle, resignLogoutToggle] = useState(false);

  // 로그아웃
  const confirmLogout = () => {
    dispatch(Logout());
  };

  // 회원탈퇴
  const confirmResign = () => {
    dispatch(ResignRequestAsync());
  };

  // 토글 창
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
    <>
      {logoutToggle && (
        <>
          <OverLay onClick={closeLogoutPopup} />
          <ConfirmPopup
            text="로그아웃 하시겠습니까?"
            close={closeLogoutPopup}
            confirm={confirmLogout}
          />
        </>
      )}

      {resignToggle && (
        <>
          <OverLay onClick={closeResignPopup} />
          <ConfirmPopup
            text="회원탈퇴 하시겠습니까?"
            close={closeResignPopup}
            confirm={confirmResign}
          />
        </>
      )}

      <section className="mypage-profile">
        <div className="mypage-profile-img-container">
          <img src={profile_image ? profile_image : default_profile} alt="" />
        </div>
        <h3 className="mypage-profile-nickname">{nickname}</h3>
      </section>

      <ul className="mypage-menu">
        <MyPageItem text="프로필 변경" />
        <MyPageItem text="비밀 번호 변경" />
        <MyPageItem text="로그아웃" onClick={openLogoutPopup} />
        <MyPageItem text="회원 탈퇴" onClick={openResignPopup} />
      </ul>
    </>
  );
};
export default MypageHome;

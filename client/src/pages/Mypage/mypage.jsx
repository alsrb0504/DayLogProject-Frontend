import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";
import InputHeader from "../../components/modules/inputHeader";

const MyPage = (props) => {
  const navigate = useNavigate();

  const moveMypage = () => {
    setIsHome(true);
    navigate("/mypage");
  };

  // 헤더 바꾸기 위해.
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="mypage">
      {isHome && <GlobalHeader />}
      {!isHome && <InputHeader text="마이 페이지" onClick={moveMypage} />}
      <main className="mypage-main">
        <Outlet context={{ setIsHome }} />
      </main>
    </div>
  );
};

export default MyPage;

import { Outlet } from "react-router-dom";
import GlobalHeader from "../../components/modules/globalHeader";

const MyPage = (props) => {
  return (
    <div className="mypage">
      <GlobalHeader />
      <main className="mypage-main">
        <Outlet />
      </main>
    </div>
  );
};

export default MyPage;

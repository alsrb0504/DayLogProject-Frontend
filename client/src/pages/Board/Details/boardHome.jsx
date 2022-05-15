import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalHeader from "../../../components/modules/globalHeader";
import BoardContainer from "../../../components/sections/boardContainer";

const BoardHome = (props) => {
  const navigate = useNavigate();

  const moveMyPage = () => {
    navigate("/board/myPage");
  };

  return (
    <div className="board-home">
      <GlobalHeader />
      {/* 파란 부분 */}
      <div className="board-header board-home-header">
        <div className="board-header-bg"></div>

        <h2 className="board-header-title board-home-header-title">
          시작이 반이다.
        </h2>

        <nav className="board-nav board-home-nav">
          <div className="board-home-nav-left">
            {/* 일단 최신순 선택되었다고 가정 */}
            <span className="board-nav-active">최신순</span>
            <span>좋아요 순</span>
          </div>

          <span
            className="board-home-nav-right board-nav-mypage"
            onClick={moveMyPage}
          >
            My Page
          </span>
        </nav>
      </div>
      {/* 목록 */}
      <BoardContainer />
    </div>
  );
};

export default BoardHome;

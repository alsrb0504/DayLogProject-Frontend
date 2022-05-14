import React from "react";
import GlobalHeader from "../../../components/modules/globalHeader";
import BoardContainer from "../../../components/sections/boardContainer";

const BoardHome = (props) => {
  return (
    <>
      <GlobalHeader />
      {/* 파란 부분 */}
      <div>
        <h2>시작이 반이다</h2>

        <nav>
          <div>
            <span>최신순</span>
            <span>좋아요 순</span>
          </div>

          <span>My Page</span>
        </nav>
      </div>
      {/* 목록 */}
      <BoardContainer />
    </>
  );
};

export default BoardHome;

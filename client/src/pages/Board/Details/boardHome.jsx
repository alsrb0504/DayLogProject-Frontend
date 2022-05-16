import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RequestHeartestBoardAsync,
  RequestLatestBoardAsync,
} from "../../../store/actions/board";
import GlobalHeader from "../../../components/modules/globalHeader";
import BoardContainer from "../../../components/sections/boardContainer";
import { SetAuthHeader } from "../../../services/auth";

const BoardHome = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // LATEST or HEARTEST
  const prev_cate = useSelector((state) => state.board.category);
  const board_list = useSelector((state) => state.board.diary_list);

  // 페이지 로드 시, 한 번 최신순 조회 실행.
  useEffect(() => {
    SetAuthHeader();

    switch (prev_cate) {
      case "HEARTEST": {
        dispatch(RequestHeartestBoardAsync());
        break;
      }
      case "LATEST":
      default: {
        dispatch(RequestLatestBoardAsync());
        break;
      }
    }
  }, [dispatch, prev_cate]);

  const setLatest = () => {
    dispatch(RequestLatestBoardAsync());
  };

  const setHeartest = () => {
    dispatch(RequestHeartestBoardAsync());
  };

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
            <span
              className={prev_cate === "LATEST" ? "board-nav-active" : ""}
              onClick={setLatest}
            >
              최신순
            </span>
            <span
              className={prev_cate === "HEARTEST" ? "board-nav-active" : ""}
              onClick={setHeartest}
            >
              좋아요 순
            </span>
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
      <BoardContainer diary_list={board_list} />
    </div>
  );
};

export default BoardHome;

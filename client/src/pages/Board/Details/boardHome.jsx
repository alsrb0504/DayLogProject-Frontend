import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GlobalHeader from "../../../components/modules/globalHeader";
import BoardContainer from "../../../components/sections/boardContainer";
import {
  RequestHeartestBoardAsync,
  RequestLatestBoardAsync,
} from "../../../store/actions/board";

const BoardHome = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // LATEST or HEARTEST
  const [cate, setCate] = useState("LATEST");

  const board_list = useSelector((state) => state.board.diary_list);
  const prev_cate = useSelector((state) => state.board.category);

  // 페이지 로드 시, 한 번 최신순 조회 실행.
  useEffect(() => {
    // if (board_list.length === 0) {
    // dispatch(RequestLatestBoardAsync());
    // }
    // dispatch(RequestHeartestBoardAsync());
    // setCate("HEARTEST");

    console.log(prev_cate);

    switch (prev_cate) {
      case "HEARTEST": {
        dispatch(RequestHeartestBoardAsync());
        setCate("HEARTEST");
        break;
      }
      case "LATEST":
      default: {
        dispatch(RequestLatestBoardAsync());
        setCate("LATEST");
        break;
      }
    }
  }, [dispatch, prev_cate]);

  const setLatest = () => {
    dispatch(RequestLatestBoardAsync());
    setCate("LATEST");
  };

  const setHeartest = () => {
    dispatch(RequestHeartestBoardAsync());
    setCate("HEARTEST");
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
              className={cate === "LATEST" ? "board-nav-active" : ""}
              onClick={setLatest}
            >
              최신순
            </span>
            <span
              className={cate === "HEARTEST" ? "board-nav-active" : ""}
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

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import BoardContainer from "../../../components/sections/boardContainer";
import {
  RequestScrapBoardAsync,
  RequestSecretBoardAsync,
  RequestShareBoardAsync,
} from "../../../store/actions/board";

const BoardMyPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // SECRET or SHARE or SCRAP
  const [cate, setCate] = useState("SECRET");

  const board_list = useSelector((state) => state.board.diary_list);
  const prev_cate = useSelector((state) => state.board.category);

  // 페이지 로드 시, 한 번 최신순 조회 실행.
  useEffect(() => {
    console.log(prev_cate);

    switch (prev_cate) {
      case "SHARE": {
        dispatch(RequestShareBoardAsync());
        setCate("SHARE");
        break;
      }
      case "SCRAP": {
        dispatch(RequestScrapBoardAsync());
        setCate("SCRAP");
        break;
      }
      case "SECRET":
      default: {
        dispatch(RequestSecretBoardAsync());
        setCate("SECRET");
        break;
      }
    }
  }, [prev_cate, dispatch, navigate]);

  const setSecret = () => {
    dispatch(RequestSecretBoardAsync());
    setCate("SECRET");
  };

  const setShare = () => {
    dispatch(RequestShareBoardAsync());
    setCate("SHARE");
  };

  const setScrap = () => {
    dispatch(RequestScrapBoardAsync());
    setCate("SCRAP");
  };

  const moveHome = () => {
    navigate("/board");
  };

  return (
    <div className="board-myPage">
      <InputHeader text="공유 게시판" onClick={moveHome} />
      {/* 파란 부분 */}
      <div className="board-header board-myPage-header">
        <div className="board-header-bg"></div>

        <h2 className="board-header-title board-myPage-header-title">닉네임</h2>

        <nav className="board-nav board-myPage-nav">
          <ul>
            <li>
              <span className={checkCate(cate, "SECRET")} onClick={setSecret}>
                비밀
              </span>
            </li>
            <li>
              <span className={checkCate(cate, "SHARE")} onClick={setShare}>
                공유
              </span>
            </li>
            <li>
              <span className={checkCate(cate, "SCRAP")} onClick={setScrap}>
                스크랩
              </span>
            </li>
          </ul>
        </nav>
      </div>
      {/* 목록 */}
      <BoardContainer diary_list={board_list} needAdd={true} />
    </div>
  );
};

export default BoardMyPage;

function checkCate(curCate, cate) {
  if (curCate === cate) return "board-nav-active";
}

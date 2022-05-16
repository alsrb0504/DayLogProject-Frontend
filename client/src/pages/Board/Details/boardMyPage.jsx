import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RequestScrapBoardAsync,
  RequestSecretBoardAsync,
  RequestShareBoardAsync,
} from "../../../store/actions/board";
import InputHeader from "../../../components/modules/inputHeader";
import BoardContainer from "../../../components/sections/boardContainer";

const BoardMyPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // SECRET or SHARE or SCRAP
  const prev_cate = useSelector((state) => state.board.category);
  const board_list = useSelector((state) => state.board.diary_list);

  // 페이지 로드 시, 한 번 최신순 조회 실행.
  useEffect(() => {
    switch (prev_cate) {
      case "SHARE": {
        dispatch(RequestShareBoardAsync());
        break;
      }
      case "SCRAP": {
        dispatch(RequestScrapBoardAsync());
        break;
      }
      case "SECRET":
      default: {
        dispatch(RequestSecretBoardAsync());
        break;
      }
    }
  }, [prev_cate, dispatch, navigate]);

  const setSecret = () => {
    dispatch(RequestSecretBoardAsync());
  };

  const setShare = () => {
    dispatch(RequestShareBoardAsync());
  };

  const setScrap = () => {
    dispatch(RequestScrapBoardAsync());
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
              <span
                className={checkCate(prev_cate, "SECRET")}
                onClick={setSecret}
              >
                비밀
              </span>
            </li>
            <li>
              <span
                className={checkCate(prev_cate, "SHARE")}
                onClick={setShare}
              >
                공유
              </span>
            </li>
            <li>
              <span
                className={checkCate(prev_cate, "SCRAP")}
                onClick={setScrap}
              >
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

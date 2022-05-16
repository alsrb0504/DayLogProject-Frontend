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
import default_profile from "../../../assets/img/default-profile.svg";

const BoardMyPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 음.. 자신의 닉네임과 profile_url을 받아와야 하는데..
  // 같이 보내는 게 좀 까다롭다 싶으면 로그인
  // 로그인 시, 저장된 닉네임과 profile_url로 구현

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
    <div className="board-profile">
      <InputHeader text="공유 게시판" onClick={moveHome} />
      {/* 파란 부분 */}
      <div className="board-header board-profile-header">
        <div className="board-header-bg"></div>

        {/* 추후 본인의 프로필 및 닉네임 가져오는 방법 결정 후 구현. */}
        <div className="board-profile-info">
          <div className="board-profile-image-container">
            <img src={default_profile} alt="프로필 이미지" />
          </div>
          <span className="board-profile-nickname">마이 닉네임</span>
        </div>

        <nav className="board-nav board-profile-nav">
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

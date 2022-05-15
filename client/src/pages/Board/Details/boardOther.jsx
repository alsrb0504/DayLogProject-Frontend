import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import BoardContainer from "../../../components/sections/boardContainer";
import default_profile from "../../../assets/img/default-profile.svg";

const BoardOther = (props) => {
  const navigate = useNavigate();

  const board_list = useSelector((state) => state.board.diary_list);
  const { writer_nickname, writer_profile } = useSelector(
    (state) => state.board.selected_user
  );

  // 새로고침 시, 리덕스 휘발성 때문에 일단 홈으로 이동.
  useEffect(() => {
    if (writer_nickname === "") {
      navigate("/board");
    }
  }, [navigate, writer_nickname]);

  const moveHome = () => {
    navigate("/board");
  };

  return (
    <div className="board-other">
      <InputHeader text="공유 게시판" onClick={moveHome} />
      {/* 파란 헤더 부분 */}
      <div className="board-header board-other-header">
        <div className="board-header-bg"></div>

        <div className="board-other-profile-info">
          <div className="board-other-image-container">
            <img
              src={writer_profile ? writer_profile : default_profile}
              alt="프로필 이미지"
            />
          </div>
          <span className="board-other-nickname">{writer_nickname}</span>
        </div>
      </div>
      {/* 목록 */}
      <BoardContainer diary_list={board_list} />
    </div>
  );
};

export default BoardOther;

import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import BoardContainer from "../../../components/sections/boardContainer";
import default_profile from "../../../assets/img/default-profile.svg";

const BoardOther = (props) => {
  const navigate = useNavigate();

  const moveHome = () => {
    // 나중에 음.. 게시물로 이동하는 것으로 구현?
    navigate("/board");
  };

  return (
    <div className="board-other">
      <InputHeader text="공유 게시판" onClick={moveHome} />
      {/* 파란 부분 */}
      <div className="board-header board-other-header">
        <div className="board-header-bg"></div>

        <div className="board-other-profile-info">
          <div className="board-other-image-container">
            <img src={default_profile} alt="프로필" />
          </div>
          <span className="board-other-nickname">닉네임</span>
        </div>
      </div>
      {/* 목록 */}
      <BoardContainer />
    </div>
  );
};

export default BoardOther;

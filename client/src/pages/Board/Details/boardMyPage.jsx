import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import BoardContainer from "../../../components/sections/boardContainer";

const BoardMyPage = (props) => {
  const navigate = useNavigate();

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
              <span className="board-nav-active">비밀</span>
            </li>
            <li>
              <span>공유</span>
            </li>
            <li>
              <span>스크랩</span>
            </li>
          </ul>
        </nav>
      </div>
      {/* 목록 */}
      <BoardContainer needAdd={true} />
    </div>
  );
};

export default BoardMyPage;

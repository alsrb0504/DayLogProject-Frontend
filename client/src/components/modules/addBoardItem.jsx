import { useNavigate } from "react-router-dom";
import diary_icon from "../../assets/icons/diary.svg";

const AddBoardItem = (props) => {
  const navigate = useNavigate();

  const moveNewDiary = () => {
    navigate("/diary/add?prev=board/mypage");
  };

  return (
    <li className="board-item board-add-item" onClick={moveNewDiary}>
      <div className="board-add-item-image">
        <img
          className="board-item-image board-item-image-logo"
          src={diary_icon}
          alt="일기 사진"
        />
      </div>

      <div className="board-add-item-text">
        <p>
          새 일기
          <br />
          만들기
        </p>
      </div>
    </li>
  );
};

export default AddBoardItem;

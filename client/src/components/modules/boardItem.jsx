import { useDispatch } from "react-redux";
import logo_image from "../../assets/img/logo-bold.svg";
import { RequestBoardDiaryAsync } from "../../store/actions/board";

const BoardItem = ({ diary }) => {
  const dispatch = useDispatch();

  // 좋아요를 날짜 옆에 표시할까?
  const { diary_no, content, image_url, date } = diary;

  const selectDiary = () => {
    dispatch(RequestBoardDiaryAsync(diary_no));
  };

  return (
    <li className="board-item" onClick={selectDiary}>
      <div className="board-item-image-container">
        <img
          className="board-item-image board-item-image-logo"
          src={image_url ? `${image_url}` : logo_image}
          alt="일기 사진"
        />
      </div>

      <div className="board-item-text">
        <h3>{content}</h3>
        <span>{date}</span>
      </div>
    </li>
  );
};

export default BoardItem;

import { useDispatch } from "react-redux";
import { lowDateToDotDate } from "../../services/calcDate";
import { RequestBoardDiaryAsync } from "../../store/actions/board";
import logo_image from "../../assets/img/logo-bold.svg";
import heart_icon from "../../assets/icons/heart-empty-pink-icon.svg";

const BoardItem = ({ diary }) => {
  const dispatch = useDispatch();

  // 좋아요를 날짜 옆에 표시할까?
  const { diary_no, content, image_url, date, like_count } = diary;

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
        <div className="text-details">
          <span className="data-info">{lowDateToDotDate(date)}</span>
          <div className="like-info">
            <img className="heart-img" src={heart_icon} alt="하트 아이콘" />
            <span>{like_count}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BoardItem;

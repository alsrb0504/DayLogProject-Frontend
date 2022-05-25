import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import default_profile from "../../../assets/img/default-profile.svg";
import dummy_image from "../../../assets/img/dummy-image.png";
import heart_icon from "../../../assets/icons/heart-pink-icon.svg";
import star_icon from "../../../assets/icons/star-yellow-icon.svg";
import heart_empty_icon from "../../../assets/icons/heart-empty-pink-icon.svg";
import star_empty_icon from "../../../assets/icons/star-empty-yellow-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ChangeHeartStateAsync,
  ChangeScrapStateAsync,
  RequestBoardProfileAsync,
} from "../../../store/actions/board";
import { SetAuthHeader } from "../../../services/auth";

const BoardDescription = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selected_diary = useSelector((state) => state.board.selected_diary);
  const {
    diary_no,
    content,
    image_url,
    like_count,
    date,
    writer_id,
    writer_nickname,
    writer_profile_url,
    is_liked,
    is_shared,
  } = selected_diary;

  // 새로고침 시, 리덕스의 데이터가 사라지기 때문에
  // 게시판 홈으로 이동
  useEffect(() => {
    SetAuthHeader();

    if (selected_diary.diary_no === undefined) {
      navigate("/board");
    }
  }, [navigate, selected_diary]);

  const changeHeart = () => {
    dispatch(ChangeHeartStateAsync(diary_no));
  };

  const changeScrap = () => {
    dispatch(ChangeScrapStateAsync(diary_no));
  };

  const moveBack = () => {
    navigate("/board");

    // 추후에 홈으로 갈지,
    // 아니면 타인 프로필 페이지 or 마이 페이지 스크랩?
    // 으로 갈지 결정.
  };

  const moveProfile = () => {
    dispatch(RequestBoardProfileAsync(writer_id));
  };

  return (
    <div className="board-desc">
      <InputHeader text="이전으로" onClick={moveBack} />

      <header className="board-desc-profile-info" onClick={moveProfile}>
        <div className="board-desc-image-container">
          <img
            src={writer_profile_url ? writer_profile_url : default_profile}
            alt="유저 프로필 이미지"
          />
        </div>
        <span className="board-desc-nickname">{writer_nickname}</span>
      </header>

      <main className="board-desc-main">
        {/* 이미지 유무에 따라 */}
        {image_url && (
          <div className="board-desc-main-image">
            <img src={image_url} alt="일기 이미지" />
          </div>
        )}

        <div className="board-desc-main-text">
          <textarea
            className={`board-form-textarea`}
            defaultValue={content}
            disabled
          ></textarea>
          <span className="board-date">{date}</span>
        </div>
      </main>

      <footer className="board-desc-footer">
        <button
          className="board-desc-footer-btn btn-40 btn-outlined"
          onClick={changeHeart}
        >
          <img
            className="btn-heart"
            src={is_liked ? heart_icon : heart_empty_icon}
            alt="하트 아이콘"
          />
          <span>{like_count}</span>
        </button>

        <button
          className="board-desc-footer-btn btn-40 btn-primary"
          onClick={changeScrap}
        >
          <img
            className="btn-star"
            src={is_shared ? star_icon : star_empty_icon}
            alt="별 아이콘"
          />
          <span>스크랩</span>
        </button>
      </footer>
    </div>
  );
};

export default BoardDescription;

import { useNavigate } from "react-router-dom";
import InputHeader from "../../../components/modules/inputHeader";
import default_profile from "../../../assets/img/default-profile.svg";
import dummy_image from "../../../assets/img/dummy-image.png";
import heart_icon from "../../../assets/icons/heart-pink-icon.svg";
import star_icon from "../../../assets/icons/star-yellow-icon.svg";

const BoardDescription = (props) => {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate("/board");

    // 추후에 홈으로 갈지,
    // 아니면 타인 프로필 페이지 or 마이 페이지 스크랩?
    // 으로 갈지 결정.
  };

  return (
    <div className="board-desc">
      <InputHeader text="이전으로" onClick={moveBack} />

      <header className="board-desc-profile-info">
        <div className="board-desc-image-container">
          <img src={default_profile} alt="프로필" />
        </div>
        <span className="board-desc-nickname">닉네임</span>
      </header>

      <main className="board-desc-main">
        {/* 이미지 유무에 따라 */}
        {true && (
          <div className="board-desc-main-image">
            <img src={dummy_image} alt="일기 이미지" />
          </div>
        )}

        <div className="board-desc-main-text">
          <textarea
            className={`board-form-textarea`}
            defaultValue="일기 내용"
            disabled
          ></textarea>
          <span className="board-date">2022-05-15</span>
        </div>
      </main>

      <footer className="board-desc-footer">
        <button className="board-desc-footer-btn btn-40 btn-outlined">
          <img className="btn-heart" src={heart_icon} alt="하트 아이콘" />
          <span>11</span>
        </button>

        <button className="board-desc-footer-btn btn-40 btn-primary">
          <img className="btn-star" src={star_icon} alt="별 아이콘" />
          <span>스크랩</span>
        </button>
      </footer>
    </div>
  );
};

export default BoardDescription;

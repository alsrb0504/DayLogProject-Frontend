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
    <div>
      <InputHeader text="이전으로" onClick={moveBack} />

      <header className="board-other-profile-info">
        <div className="board-other-image-container">
          <img src={default_profile} alt="프로필" />
        </div>
        <span className="board-other-nickname">닉네임</span>
      </header>

      <main>
        {/* 이미지 유무에 따라 */}
        {false && (
          <div>
            <img src={dummy_image} alt="일기 이미지" />
          </div>
        )}

        <div className="diary-desc-main-text">
          <textarea
            className={`diary-form-textarea`}
            placeholder="일정 내용"
          ></textarea>
          <span className="diary-date">2022-05-15</span>
        </div>
      </main>

      <footer>
        <button>
          <img src={heart_icon} alt="하트 아이콘" />
          <span>11</span>
        </button>

        <button>
          <img src={star_icon} alt="별 아이콘" />
          <span>스크랩</span>
        </button>
      </footer>
    </div>
  );
};

export default BoardDescription;

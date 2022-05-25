import { useSelector } from "react-redux";
import dummy_emoji from "../../assets/img/dummy-emoji.svg";
import Button from "./button";

const ChoiceResultPopup = ({ closeChoicePopup }) => {
  const choice_emoji = useSelector((state) => state.qa.selected_emoji_index);
  const choice_desc = useSelector((state) => state.qa.description);

  return (
    <div className="qa-popup choice-popup">
      <h2 className="qa-popup-title">오늘의 스티커</h2>
      <main className="qa-popup-main">
        <section className="choice-popup-main">
          <div className="choice-image-container">
            <img
              // 추후 이모지 연결 시, index에 따라 다른 이모지 css 만들어야 함.
              className={`choice-image-emoji choice_image-emoji-${choice_emoji}`}
              src={dummy_emoji}
              alt="더미 이모지"
            />
          </div>
          <p className="choice-text">{choice_desc}</p>
        </section>
        <Button
          text="다음"
          color="btn-secondary"
          size="btn-40"
          className="qa-popup-btn"
          onClick={closeChoicePopup}
        />
      </main>
    </div>
  );
};

export default ChoiceResultPopup;

import dummy_emoji from "../../assets/img/dummy-emoji.svg";
import Button from "./button";

const ChoiceResultPopup = (props) => {
  return (
    <div className="choice-popup">
      <h2 className="choice-popup-title">오늘의 스티커</h2>
      <section className="choice-popup-main">
        <div className="choice-image-container">
          <img src={dummy_emoji} alt="더미 이모지" />
        </div>
        <p className="choice-text">스티커 관련 Text</p>
      </section>
      <Button
        text="다음"
        color="btn-secondary"
        size="btn-40"
        className="choice-popup-btn"
      />
    </div>
  );
};

export default ChoiceResultPopup;

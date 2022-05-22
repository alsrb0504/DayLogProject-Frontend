import dummy_emoji from "../../assets/img/dummy-emoji.svg";
import Button from "./button";

const ChoiceResultPopup = (props) => {
  return (
    <div>
      <h2 className="badge-popup-title">오늘의 스티커</h2>
      <section>
        <div>
          <img src={dummy_emoji} alt="더미 이모지" />
        </div>
        <p>스티커 관련 Text</p>
      </section>
      <Button text="다음" color="btn-secondary" size="btn-40" />
    </div>
  );
};

export default ChoiceResultPopup;

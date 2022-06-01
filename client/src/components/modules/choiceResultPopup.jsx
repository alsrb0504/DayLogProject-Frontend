import { useSelector } from "react-redux";
// import dummy_emoji from "../../assets/img/dummy-emoji.png";
import Button from "./button";

const ChoiceResultPopup = ({ closeChoicePopup }) => {
  const choice_emoji = useSelector((state) => state.qa.selected_emoji_index);
  const choice_desc = useSelector((state) => state.qa.description);

  return (
    <div className="qa-popup choice-popup">
      <h2 className="qa-popup-title">오늘의 스티커</h2>
      <main className="qa-popup-main">
        <section className="choice-popup-main">
          <div
            className={`choice-image-container choice-image-emoji choice_image-emoji-${choice_emoji}`}
          ></div>
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

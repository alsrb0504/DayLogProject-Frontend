import React from "react";

const EmotionItem = ({ idx, img, curEmotion, setEmotion }) => {
  const index = Number(idx);

  const handleClick = () => {
    if (index === curEmotion) {
      setEmotion(0);
    } else {
      setEmotion(index);
    }
  };

  return (
    <li
      className={`emotion-popup-item ${
        curEmotion === index ? "emotion-popup-item-selected" : ""
      }`}
      onClick={handleClick}
    >
      <div>
        <img src={img} alt="heart img" />
      </div>
    </li>
  );
};

export default EmotionItem;

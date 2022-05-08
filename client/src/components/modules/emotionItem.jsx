import React from "react";

const EmotionItem = ({ idx, img, setEmotion }) => {
  const handleClick = () => {
    setEmotion(Number(idx));
  };

  return (
    <li onClick={handleClick}>
      <div>
        <img src={img} alt="heart img" />
      </div>
    </li>
  );
};

export default EmotionItem;

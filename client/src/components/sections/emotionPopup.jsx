import React from "react";
import heart_red from "../../assets/img/hearts/heart-red.svg";
import heart_orange from "../../assets/img/hearts/heart-orange.svg";
import heart_yellow from "../../assets/img/hearts/heart-yellow.svg";
import heart_green from "../../assets/img/hearts/heart-green.svg";
import heart_sky from "../../assets/img/hearts/heart-sky.svg";
import heart_blue from "../../assets/img/hearts/heart-blue.svg";
import heart_purple from "../../assets/img/hearts/heart-purple.svg";
import EmotionItem from "../modules/emotionItem";
import Button from "../modules/button";

const EmotionPopup = ({ close, emotion, setEmotion, submitBtn }) => {
  return (
    <div className="emotion-popup">
      <h2 className="emotion-popup-title">오늘의 기분</h2>
      <ul className="emotion-popup-container">
        <EmotionItem
          idx="1"
          img={heart_red}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
        <EmotionItem
          idx="2"
          img={heart_orange}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
        <EmotionItem
          idx="3"
          img={heart_yellow}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
        <EmotionItem
          idx="4"
          img={heart_green}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
        <EmotionItem
          idx="5"
          img={heart_sky}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
        <EmotionItem
          idx="6"
          img={heart_blue}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
        <EmotionItem
          idx="7"
          img={heart_purple}
          curEmotion={emotion}
          setEmotion={setEmotion}
        />
      </ul>
      <div className="emotion-popup-btns">
        <Button
          text="취소"
          type="button"
          color="btn-secondary"
          size="btn-40 col-sm-1"
          onClick={close}
        />
        {submitBtn}
      </div>
    </div>
  );
};

export default EmotionPopup;

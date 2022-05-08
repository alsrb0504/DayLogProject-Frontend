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

const EmotionPopup = ({ close, setEmotion, submitBtn }) => {
  return (
    <div
      style={{ zIndex: 999999, position: "absolute", backgroundColor: "white" }}
    >
      <h2>오늘의 기분</h2>
      <div>
        <ul>
          <EmotionItem idx="1" img={heart_red} setEmotion={setEmotion} />
          <EmotionItem idx="2" img={heart_orange} setEmotion={setEmotion} />
          <EmotionItem idx="3" img={heart_yellow} setEmotion={setEmotion} />
          <EmotionItem idx="4" img={heart_green} setEmotion={setEmotion} />
          <EmotionItem idx="5" img={heart_sky} setEmotion={setEmotion} />
          <EmotionItem idx="6" img={heart_blue} setEmotion={setEmotion} />
          <EmotionItem idx="7" img={heart_purple} setEmotion={setEmotion} />
        </ul>
      </div>
      <div>
        <Button
          text="취소"
          type="button"
          color="btn-secondary"
          size="btn-40 col-sm-2"
          onClick={close}
        />
        {submitBtn}
      </div>
    </div>
  );
};

export default EmotionPopup;

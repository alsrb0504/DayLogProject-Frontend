import React from "react";
import arrow_back_icon from "../../assets/icons/arrow-back.svg";

const InputHeader = ({ text, onClick }) => {
  return (
    <header>
      <div onClick={onClick}>
        <img src={arrow_back_icon} alt="arrow-back-icon" />
      </div>
      <span>{text}</span>
    </header>
  );
};

export default InputHeader;

import React from "react";
import arrow_back_icon from "../../assets/icons/arrow-back.svg";

const InputHeader = ({ text, onClick }) => {
  return (
    <header className="input-header">
      <div className="header-section">
        <div className="header-icon-box" onClick={onClick}>
          <img src={arrow_back_icon} alt="arrow-back-icon" />
        </div>
        <span className="header-text">{text}</span>
      </div>
    </header>
  );
};

export default InputHeader;

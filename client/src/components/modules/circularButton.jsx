import React from "react";

const CircularButton = ({ icon, onClick, option }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className={`circle-btn ${option}`} onClick={handleClick}>
      <img className="circle-btn-img" src={icon} alt="아이콘 버튼" />
    </button>
  );
};

export default CircularButton;

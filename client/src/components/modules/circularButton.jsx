import React from "react";

const CircularButton = ({ icon, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick}>
      <img src={icon} alt="아이콘 버튼" />
    </button>
  );
};

export default CircularButton;

import React from "react";
import add_btn_icon from "../../assets/icons/add-btn.svg";

// todo, 일정 추가, 식단추가, 프로필 이미지 변경에
// 쓰이기에 used로 용도 구분하여 크기 조정.
const AddButton = ({ used, onClick }) => {
  return (
    <button className={`add-btn ${used}`} onClick={onClick}>
      <img src={add_btn_icon} alt="" />
    </button>
  );
};

export default AddButton;

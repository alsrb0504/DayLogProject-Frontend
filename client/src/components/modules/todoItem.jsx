import React from "react";
import check_icon from "../../assets/icons/check.svg";
import delete_icon from "../../assets/icons/delete.svg";

const TodoItem = ({ todo }) => {
  return (
    <li className="todo-item">
      <button className="check-btn">
        <img className="check-btn-img" src={check_icon} alt="check icon" />
      </button>
      <span className="todo-item-content">{todo.Content}</span>
      <button className="delete-btn">
        <img src={delete_icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default TodoItem;

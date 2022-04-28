import React from "react";
import check_icon from "../../assets/icons/check.svg";
import delete_icon from "../../assets/icons/delete.svg";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <button>
        <img src={check_icon} alt="check icon" />
      </button>
      <span>{todo.Content}</span>
      <button>
        <img src={delete_icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default TodoItem;

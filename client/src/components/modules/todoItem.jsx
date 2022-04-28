import React, { useEffect, useState } from "react";
import check_icon from "../../assets/icons/check.svg";
import delete_icon from "../../assets/icons/delete.svg";

const TodoItem = ({ todo }) => {
  const [check, setCheck] = useState(todo.State);

  const handleCheck = () => {
    setCheck(!check);

    // 이것도 리덕스에 액션 발생시켜서
    // 상태변경하고 이 상태변경을 todo에서 감지해서
    // 다시 렌더링
  };

  const handleDelete = () => {
    // 흠.. 원래는 todo에 가서 지워야 하는데
    // 난 리덕스를 쓸 거란 말이지
    // 그러면 리덕스로 액션 발생시키고
    // 지우는 이벤트 후에, 서버와 통신해줘야 겠지..?
    console.log("hi");
  };

  return (
    <li className="todo-item">
      <button className="check-btn" onClick={handleCheck}>
        {check && (
          <img className="check-btn-img" src={check_icon} alt="check icon" />
        )}
      </button>
      <span className="todo-item-content">{todo.Content}</span>
      <button className="delete-btn" onClick={handleDelete}>
        <img src={delete_icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default TodoItem;

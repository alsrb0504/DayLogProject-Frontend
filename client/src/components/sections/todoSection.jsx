import React from "react";
import TodoItem from "../modules/todoItem";

const TodoSection = (props) => {
  return (
    <section className="todo-section">
      <h3 className="todo-section-date">2022-04-29</h3>
      <ul className="todo-container">
        <li className="todo-container-item"></li>
        <TodoItem
          todo={{
            State: false,
            Content: "투두리스트",
          }}
        />
      </ul>
    </section>
  );
};

export default TodoSection;

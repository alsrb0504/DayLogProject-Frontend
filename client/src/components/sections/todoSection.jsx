import React from "react";
import Todolist from "../modules/todolist";

const TodoSection = (props) => {
  return (
    <section className="todo-section">
      <h3 className="todo-section-date">2022-04-29</h3>

      <Todolist />
    </section>
  );
};

export default TodoSection;

import React from "react";
import Todolist from "../modules/todolist";

const TodoSection = ({ date }) => {
  return (
    <section className="todo-section">
      <h3 className="todo-section-date">{date}</h3>

      <Todolist />
    </section>
  );
};

export default TodoSection;

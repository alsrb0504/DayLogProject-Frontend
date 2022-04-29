import React from "react";
import EmptyText from "../modules/emptyText";
import Todolist from "../modules/todolist";

const TodoSection = ({ todos }) => {
  return (
    <section className="todo-section">
      {todos && <Todolist todos={todos} />}
      {!todos && (
        <EmptyText text="오늘의 할 일이 없습니다.<br/>할 일을 추가해보세요." />
      )}
    </section>
  );
};

export default TodoSection;

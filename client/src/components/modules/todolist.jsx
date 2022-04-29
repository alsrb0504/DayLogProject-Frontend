import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem";

const Todolist = (props) => {
  const todos = useSelector((state) => state.todo.selected_day_todos.todos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <ul>
      {todos &&
        todos.map((todo) => <TodoItem todo={todo} key={todo.todo_no} />)}

      {/* 오늘의 todo가 없을 경우 : 미구현 */}
      {!todos && <span>오늘의 todo가 없습니다. </span>}
    </ul>
  );
};

export default Todolist;

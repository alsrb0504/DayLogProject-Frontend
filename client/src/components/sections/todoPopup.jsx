import React from "react";
import { useForm } from "react-hook-form";
import AddButton from "../modules/addButton";
import InputContainer from "../modules/inputContainer";
import Todolist from "../modules/todolist";
import close_btn_icon from "../../assets/icons/close-btn.svg";
import { useSelector } from "react-redux";
import EmptyText from "../modules/emptyText";

const TodoPopup = ({ date }) => {
  const { register, handleSubmit } = useForm();

  const month_todos = useSelector((state) => state.todo.month_todos);

  const todos = month_todos.find(
    (daily_todos) => daily_todos.date === "2022-04-30"
  );

  console.log(date);

  const onSubmit = (content) => {
    console.log(content);
    console.log("submit");
  };

  return (
    <div className="todo-popup">
      <button className="todo-popup-close-btn">
        <img src={close_btn_icon} alt="" />
      </button>
      <h2 className="todo-popup-title">{date}</h2>

      <div className="todo-popup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer
            children={
              <input
                type="text"
                placeholder="투두리스트를 추가하세요."
                {...register("content", { required: true })}
              />
            }
          />
        </form>
        <AddButton used="todo" onClick={handleSubmit(onSubmit)} />
      </div>

      <section className="todo-popup-section">
        {todos && <Todolist todos={todos.todos} />}
        {!todos && (
          <EmptyText text="오늘의 할 일이 없습니다.<br/>할 일을 추가해보세요." />
        )}
      </section>
    </div>
  );
};

export default TodoPopup;

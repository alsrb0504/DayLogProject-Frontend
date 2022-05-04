import React from "react";
import { useForm } from "react-hook-form";
import AddButton from "../modules/addButton";
import InputContainer from "../modules/inputContainer";
import close_btn_icon from "../../assets/icons/close-btn.svg";
import TodoSection from "./todoSection";
import { useDispatch } from "react-redux";
import { AddTodoAsync } from "../../store/actions/todo";

const TodoPopup = ({ date, dateFormat, todos, closePopup }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (content) => {
    dispatch(AddTodoAsync(content, dateFormat.date));
  };

  return (
    <div className="todo-popup">
      <button className="todo-popup-close-btn" onClick={closePopup}>
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
            error={errors.content && "input-error"}
          />
        </form>
        <AddButton used="todo" onClick={handleSubmit(onSubmit)} />
      </div>

      <TodoSection
        // select_todo가 없다면 undefined 전달
        todos={todos}
      />
    </div>
  );
};

export default TodoPopup;

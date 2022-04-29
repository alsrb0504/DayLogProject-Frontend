import React from "react";
import { useForm } from "react-hook-form";
import AddButton from "../modules/addButton";
import InputContainer from "../modules/inputContainer";
import Todolist from "../modules/todolist";
import close_btn_icon from "../../assets/icons/close-btn.svg";

const TodoPopup = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="todo-popup">
      <button className="todo-popup-close-btn">
        <img src={close_btn_icon} alt="" />
      </button>
      <h2 className="todo-popup-title">Monday, March 3</h2>

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
        <AddButton used="todo" onClick={onSubmit} />
      </div>

      <section className="todo-popup-section">
        <Todolist />
      </section>
    </div>
  );
};

export default TodoPopup;

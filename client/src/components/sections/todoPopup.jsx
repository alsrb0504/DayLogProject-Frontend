import React from "react";
import { useForm } from "react-hook-form";
import AddButton from "../modules/addButton";
import InputContainer from "../modules/inputContainer";
import Todolist from "../modules/todolist";

const TodoPopup = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <button>x</button>
      <h2>Monday, March 3</h2>

      <div>
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

      <section>
        <Todolist />
      </section>
    </div>
  );
};

export default TodoPopup;

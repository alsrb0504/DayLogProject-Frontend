import { useForm } from "react-hook-form";
import { AddTodoAsync } from "../../store/actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { RequestChallengeBadgeAsync } from "../../store/actions/badge";
import AddButton from "../modules/addButton";
import TodoSection from "./todoSection";
import InputContainer from "../modules/inputContainer";
import close_btn_icon from "../../assets/icons/close-btn.svg";

const TodoPopup = ({ date_info, closePopup }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const todos = useSelector((state) => state.todo.selected_todos);
  const set_date = useSelector((state) => state.todo.selected_date);

  const onSubmit = (content) => {
    dispatch(AddTodoAsync(content, set_date));
    dispatch(RequestChallengeBadgeAsync());
    reset();
  };

  return (
    <div className="todo-popup">
      <button className="todo-popup-close-btn" onClick={closePopup}>
        <img src={close_btn_icon} alt="" />
      </button>
      <h2 className="todo-popup-title">{date_info}</h2>

      <div className="todo-popup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer
            children={
              <input
                type="text"
                placeholder="투두리스트를 추가하세요."
                autoFocus={true}
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
        is_home={false}
      />
    </div>
  );
};

export default TodoPopup;

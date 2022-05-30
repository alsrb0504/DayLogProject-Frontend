import { useDispatch } from "react-redux";
import { changeTodoAsync, RemoveTodoAsync } from "../../store/actions/todo";
import check_icon from "../../assets/icons/check.svg";
import delete_icon from "../../assets/icons/delete-icon.svg";

const TodoItem = ({ todo }) => {
  const { todo_checked, todo_content } = todo;

  console.log(todo_checked);

  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(changeTodoAsync(todo.todo_no));
  };

  const handleDelete = () => {
    dispatch(RemoveTodoAsync(todo.todo_no));
  };

  return (
    <li className="todo-item">
      <button className="check-btn" onClick={handleCheck}>
        {"true" === todo_checked && (
          <img className="check-btn-img" src={check_icon} alt="check icon" />
        )}
      </button>
      <span
        className={`todo-item-content ${
          todo_checked !== "false" ? "todo-checked" : ""
        }`}
      >
        {todo_content}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        <img src={delete_icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default TodoItem;

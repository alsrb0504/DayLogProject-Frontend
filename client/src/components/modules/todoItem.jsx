import { useDispatch } from "react-redux";
import check_icon from "../../assets/icons/check.svg";
import delete_icon from "../../assets/icons/delete.svg";
import { changeTodoAsync, RemoveTodoAsync } from "../../store/actions/todo";

const TodoItem = ({ todo }) => {
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
        {todo.state && (
          <img className="check-btn-img" src={check_icon} alt="check icon" />
        )}
      </button>
      <span className="todo-item-content">{todo.content}</span>
      <button className="delete-btn" onClick={handleDelete}>
        <img src={delete_icon} alt="delete icon" />
      </button>
    </li>
  );
};

export default TodoItem;

import { useSelector } from "react-redux";
import EmptyText from "./emptyText";
import TodoItem from "./todoItem";

const Todolist = (props) => {
  const todos = useSelector((state) => state.todo.selected_day_todos.todos);

  return (
    <ul>
      {todos &&
        todos.map((todo) => <TodoItem todo={todo} key={todo.todo_no} />)}

      {/* 오늘의 todo가 없을 경우 : 미구현 */}
      {!todos && (
        <EmptyText
          text="오늘의 할 일이 없습니다.<br/>
         할 일을 추가해보세요."
        />
      )}
    </ul>
  );
};

export default Todolist;

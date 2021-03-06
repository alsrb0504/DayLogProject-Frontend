import TodoItem from "./todoItem";

const Todolist = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.map((todo) => <TodoItem todo={todo} key={todo.todo_no} />)}
    </ul>
  );
};

export default Todolist;

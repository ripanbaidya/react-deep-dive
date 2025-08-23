import { FaCheck, FaTrash } from "react-icons/fa";

const TodoItem = ({ todoName, todoDate, completed }) => {
  return (
    <div className={`todo-card ${completed ? "todo-completed" : ""}`}>
      <div className="todo-name">{todoName}</div>
      <div className="todo-date">{todoDate}</div>
      <div>
        <button className="icon-btn success"><FaCheck /></button>
        <button className="icon-btn danger"><FaTrash /></button>
      </div>
    </div>
  );
};
export default TodoItem;

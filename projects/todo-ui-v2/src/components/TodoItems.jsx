import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoName={todoItem.name}
          todoDate={todoItem.date}
        />
      ))}
    </div>
  );
};

export default TodoItems;

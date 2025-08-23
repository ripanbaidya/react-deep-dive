const AddTodo = () => {
  return (
    <div className="add-todo">
      <div className="add-todo-row">
        <input type="text" placeholder="Enter todo." />
        <input type="date" />
        <button type="button" className="add-btn">Add</button>
      </div>
    </div>
  );
};
export default AddTodo;

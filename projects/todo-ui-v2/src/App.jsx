import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = [
    { name: "Learn Microservices", date: "24/08/2025" },
    { name: "Learn Docker", date: "25/08/2025" },
    { name: "Learn Kubernetes", date: "26/08/2025" },
    { name: "Learn AWS", date: "27/08/2025" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;

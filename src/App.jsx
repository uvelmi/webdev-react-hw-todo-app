import AppRoutes from "./AppRoutes";
import { useState, useEffect } from "react";
import { getTodos } from "./api";
import { Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Хлеб" },
    { id: 2, text: "Молоко" },
    { id: 3, text: "Сок" },
  ]);

  const [postLoading, setPostLoading] = useState(true);
  const [addTodoError, setAddTodoError] = useState(null);
  useEffect(() => {
    async function getAllTodos() {
      try {
        const todos = await getTodos();
        console.log(todos);
        setTodos(todos.todos);
        setPostLoading(false);
      } catch (error) {
        setAddTodoError(error.message);
        setTodos([]);
      }
    }
    getAllTodos();
  }, []);

  const [currentTodo, setCurrentTodo] = useState(null);
  // const handleTodoClick = (todo) => {
  // 	setCurrentTodo(todo);
  // };
  return (
    <>
      {currentTodo ? (
        <div className="current-task">Current task: {currentTodo.text}</div>
      ) : null}
			<h3>Навигация</h3>
			<Link to='/'>Задачи</Link>
			<br />
			<Link to='/add'>Добавить задачу</Link>
			<br />
			<Link to='/about'>О проекте</Link>
			<br />
			<br />
      <AppRoutes
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        todos={todos}
        setTodos={setTodos}
      ></AppRoutes>
    </>
  );
}

export default App;

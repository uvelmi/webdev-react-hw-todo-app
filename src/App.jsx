import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import { getTodos } from "./api";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Хлеб" },
    { id: 2, text: "Молоко" },
    { id: 3, text: "Сок" },
  ]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos.todos);
    });
  }, []);

  return <AppRoutes todos={todos} setTodos={setTodos}></AppRoutes>;
}

export default App;

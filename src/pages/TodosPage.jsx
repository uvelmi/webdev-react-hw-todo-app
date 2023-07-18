import { useEffect, useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { getTodos } from "../api";

export default function TodosPage() {
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

  return (
    <div className="page">
      <h1>Список задач</h1>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}

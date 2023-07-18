import { useEffect, useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { getTodos } from "../api";
import { Link } from "react-router-dom";

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
      <h3>Навигация</h3>
      <Link to="/">Задачи</Link>
      <br />
      <Link to="/add">Добавить задачу</Link>
      <br />
      <Link to="/about">О проекте</Link>
      <br />
      <br />

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

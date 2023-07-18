import { Link } from "react-router-dom";
import { AddTodoForm } from "../components/AddTodoForm";

export default function AddTodoPage({ setTodos }) {
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
      <h1>Страница добавления задачи</h1>
      <AddTodoForm setTodos={setTodos} />
    </div>
  );
}

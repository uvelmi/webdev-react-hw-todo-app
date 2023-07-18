import { Link } from "react-router-dom";

export default function AddTodoPage() {
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
      <p>Сюда мы перенесем форму добавления</p>
    </div>
  );
}

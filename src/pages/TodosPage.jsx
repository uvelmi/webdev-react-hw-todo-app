import { useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { getTodos, deleteTodos } from "../api";
import { useEffect } from "react";

export default function TodosPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Хлеб" },
    { id: 2, text: "Молоко" },
    { id: 3, text: "Сок" },
  ]);

	const [isDeleteLoading, setIsDeleteLoading] = useState({});
	const [postLoading, setPostLoading] = useState(true);
	const [addTodoError, setAddTodoError] = useState(null);
	const [deleteTodoError, setDeleteTodoError] = useState(null);

   const deleteHandler = async({id}) => {
		setIsDeleteLoading({...isDeleteLoading, [id]: true})
    // setTodos(todos.filter((item) => item.id !== id));
		try {
      const newDelete = await deleteTodos({id});
      setTodos(newDelete.todos);
      setIsDeleteLoading({...isDeleteLoading, [id]: false})
    } catch (error) {
      setDeleteTodoError(error.message);
      setIsDeleteLoading({...isDeleteLoading, [id]: false})
    }
  };



	useEffect(() => {
		async function getAllTodos() {
			try {
				const todos = await getTodos();
			console.log(todos)
			setTodos(todos.todos)
			setPostLoading(false);
		} catch (error) {
			setAddTodoError(error.message)
			setTodos([]);
		}
	}
		getAllTodos();
	}, []);
  return (
    <div className="page">
      <h1>Список задач</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              {""}
              <button disabled={isDeleteLoading [todo.id]} onClick={() => deleteHandler({id: todo.id})}>{(isDeleteLoading [todo.id]) ? "Loading" : 'Delete'}</button>
            </li>
          );
        })}     
			</ul>
			<p style={{color: 'orange'}}>{deleteTodoError}</p>
      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}

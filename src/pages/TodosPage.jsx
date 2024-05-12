import { useState } from "react";
import { deleteTodos } from "../api";

export default function TodosPage({todos, setTodos, setCurrentTodo}) {

	const [isDeleteLoading, setIsDeleteLoading] = useState({});
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

	
  return (
    <div className="page">
      <h1>Список задач</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li onClick={() => setCurrentTodo(todo)} className="todo-item" key={todo.id}>
              {todo.text}
              {""}
              <button disabled={isDeleteLoading [todo.id]} onClick={() => deleteHandler({id: todo.id})}>{(isDeleteLoading [todo.id]) ? "Loading" : 'Delete'}</button>
            </li>
          );
        })}     
			</ul>
			<p style={{color: 'orange'}}>{deleteTodoError}</p>
     
    </div>
  );
}

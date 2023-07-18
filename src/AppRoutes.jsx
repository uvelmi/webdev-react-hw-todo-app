import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import AddTodoPage from "./pages/AddTodoPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TodosPage></TodosPage>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/add" element={<AddTodoPage></AddTodoPage>}></Route>
    </Routes>
  );
}

export default AppRoutes;

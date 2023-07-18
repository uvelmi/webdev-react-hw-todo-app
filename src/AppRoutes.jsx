import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TodosPage></TodosPage>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
    </Routes>
  );
}

export default AppRoutes;

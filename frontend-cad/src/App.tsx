import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForbiddenPage from "./pages/ForbiddenPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard">   
          <Route path=":id" element={<DashboardPage />} />
        </Route>
        <Route path="/forbidden" element={<ForbiddenPage />}/>
        <Route path="/edit">   
          <Route path=":id" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
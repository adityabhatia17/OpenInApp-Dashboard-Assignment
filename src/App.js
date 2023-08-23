import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/LoginPage/Login";
import Dashboard from "./Components/Portal/Components/Dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portal from "./Components/Portal/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  );
}

export default App;

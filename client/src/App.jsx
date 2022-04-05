import "./App.scss";
import Login from "./pages/Login/login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="tablet-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

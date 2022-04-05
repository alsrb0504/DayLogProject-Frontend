import "./App.scss";
import Login from "./pages/Login/login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import SignUp from "./pages/SignUp/signUp";

function App() {
  return (
    <div className="tablet-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

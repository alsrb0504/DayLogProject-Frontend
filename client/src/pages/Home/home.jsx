import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const onTest = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJfa…zM2fQ.GzlqwE9eDyZv4ixWhSXBtwZ5Eg1f_XvZmaKgyKvX1Ig";

    const res = await axios.post("/api/members/login/token", token);
    console.log(res);
  };

  return (
    <div className="contain">
      <div className="row">
        <h1>Home page</h1>
        <br />
        <Link to="/login">Move to Login</Link>
        <br />
        <br />
        <Link to="/signup">Move to Signup</Link>

        <button onClick={onTest}>token test</button>
      </div>
    </div>
  );
};

export default Home;

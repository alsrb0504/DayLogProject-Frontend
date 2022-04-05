import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="contain">
      <div className="row">
        <h1>Home page</h1>
        <br />
        <Link to="/login">Move to Login</Link>
        <br />
        <br />
        <Link to="/signup">Move to Signup</Link>
      </div>
    </div>
  );
};

export default Home;

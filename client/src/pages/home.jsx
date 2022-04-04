import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="contain">
      <div className="row">
        <h1>Home page</h1>
        <Link to="/login">Move to Login</Link>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Link to="/todolist">Back to Todo List</Link>{" "}
    </div>
  );
};

export default Home;

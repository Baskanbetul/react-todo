import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Link to="/">Back to Todo List</Link> {/* Link to navigate back */}
    </div>
  );
};

export default Home;

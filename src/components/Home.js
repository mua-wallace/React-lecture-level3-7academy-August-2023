import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 style={{ color: "red" }}>Home Component</h1>
      <Link to={"/about"}>Got to about</Link>
      <Link to={"/survey"}>Got to survey</Link>
    </div>
  );
};

export default Home;

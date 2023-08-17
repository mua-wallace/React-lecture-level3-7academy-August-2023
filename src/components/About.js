import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h1 style={{ color: "blue" }}>About Component</h1>
      <Link to={"/"}>Got to home</Link>
      <Link to={"/survey"}>Got to survey</Link>
    </div>
  );
};

export default About;

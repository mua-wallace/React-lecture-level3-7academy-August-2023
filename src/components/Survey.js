import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate()


  const sendSurvey = (e) => {
    e.preventDefault()

    navigate(-1)
  }

  return (
    <div className="container">
      <form onSubmit={sendSurvey}>
        <div>
        <label htmlFor="your_name">Your Name:</label>
        <input
          type="text"
          name="your_name"
          id="your_name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        /></div>
        <div>
        <label htmlFor="your_comment">Your Comment:</label>
        <textarea
          name="your_comment"
          id="your_comment"
          rows={5}
          cols={30}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea></div>
        <input type="submit" value="Submit Survey" />
      </form>
    </div>
  );
};

export default Survey;

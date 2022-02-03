import React from "react";
import "./style.css";

const Note = ({ key, text, color }) => {
  return (
    <div>
      <div className={`card ${color}`} id={key}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;

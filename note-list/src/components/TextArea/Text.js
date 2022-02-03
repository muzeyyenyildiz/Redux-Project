import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { setActiveColor, addNotesList } from "../../redux/note/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./style.css";

const Text = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const activeColor = useSelector((state) => state.notes.activeColor);

  console.log(activeColor);
  const handleActive = (color) => {
    dispatch(setActiveColor(color));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      alert("You need to write something");
    } else {
      dispatch(addNotesList({ id: nanoid(), text, color: activeColor }));
    }
    setText("");
  };

  return (
    <div className="text">
      <div className="text-container">
        <textarea
          placeholder="Enter your note here..."
          className="text-area"
          rows={7}
          cols={100}
          onChange={(event) => setText(event.target.value)}
          value={text}
        ></textarea>
        <form className="footer" onSubmit={handleSubmit}>
          <div className="colors">
            <div className="color pembe" onClick={() => handleActive("pembe")}>
              {activeColor === "pembe" ? (
                <FontAwesomeIcon className="check" icon={faCheck} />
              ) : null}
            </div>
            <div className="color mor" onClick={() => handleActive("mor")}>
              {activeColor === "mor" ? (
                <FontAwesomeIcon className="check" icon={faCheck} />
              ) : null}
            </div>
            <div className="color sari" onClick={() => handleActive("sari")}>
              {activeColor === "sari" ? (
                <FontAwesomeIcon className="check" icon={faCheck} />
              ) : null}
            </div>
            <div className="color mavi" onClick={() => handleActive("mavi")}>
              {activeColor === "mavi" ? (
                <FontAwesomeIcon className="check" icon={faCheck} />
              ) : null}
            </div>
            <div className="color yesil" onClick={() => handleActive("yesil")}>
              {activeColor === "yesil" ? (
                <FontAwesomeIcon className="check" icon={faCheck} />
              ) : null}
            </div>
          </div>
          <button className="addButon">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Text;

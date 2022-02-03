import React from "react";
import { useSelector } from "react-redux";
import Note from "../Note/Note";
import "./style.css";

const NoteList = () => {
  let notes = useSelector((state) => state.notes.items);
  const filteredNotes = useSelector((state) => state.notes.filteredNotes);

  if (filteredNotes.length > 0) {
    notes = [...filteredNotes];
  }

  return (
    <div>
      <div className="list-container">
        {notes.map((note) => (
          <Note key={note.id} text={note.text} color={note.color} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;

import React from "react";
import Header from "./components/Header/Header";
import NoteList from "./components/NoteList/NoteList";
import Text from "./components/TextArea/Text";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Text />
      <NoteList />
    </div>
  );
}

export default App;

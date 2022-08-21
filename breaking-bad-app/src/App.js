import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterPage from "./pages/CharacterPage";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`char/:char_id`} element={<CharacterPage/>} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
export default App;


function Users() {
  
}
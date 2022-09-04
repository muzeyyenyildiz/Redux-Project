import * as React from "react";
import { Routes, Route,Link} from "react-router-dom";
import "./App.css";
import CharacterPage from "./pages/CharacterPage";
import Home from "./pages/Home"
import Quotes from "./pages/Quotes";

function App() {
  return (
    <div className="App">
       <nav>
        <Link to="/">Characters</Link>
        <Link to="quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<CharacterPage/>} />
        <Route path="/quotes" element={<Quotes/>} />
      </Routes>
    </div>
  );
}
export default App;


function Users() {
  
}
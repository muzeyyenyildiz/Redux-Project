import {useState} from "react";
import "./style.css";
import { setFilteredNotes } from "../../redux/note/notesSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  console.log(searchText);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyUp = () => {
    dispatch(setFilteredNotes(searchText));
  };

  return (
    <div className="header">
      <h1>NotesApp</h1>
      <input
        className="search-input"
        placeholder="Search..."
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
};

export default Header;

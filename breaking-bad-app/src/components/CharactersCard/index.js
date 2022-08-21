import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

const CharacterCard = ({ item }) => {
  return (
    <>
        <div key={item.char_id}>
          <Link to={`/char/${item.char_id}`}>
          <img alt={item.name} src={item.img} className="img-style" />
          <div className="char_name">{item.name}</div>
          </Link>
        </div>
    </>
  );
};

export default CharacterCard;

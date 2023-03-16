import React, { useState } from "react";
import './Search.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event)=>{
    setTerm(event.target.value);
    
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleClick}>
        <label>Enter Search Item</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;

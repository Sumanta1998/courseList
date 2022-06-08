import React, { useState } from "react";
import "./SearchBar.css";
function SearchBar({ searchInput, setSearchInput }) {
  const [input, setInput] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    setSearchInput(input);
  };
  return (
    <div className="searchBar">
      <form onSubmit={onFormSubmit}>
        <input
          placeholder={`Search...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

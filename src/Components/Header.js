import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
function Header({ searchInput, setSearchInput }) {
  return (
    <div className="main_header">
      {/* <div className="main_header_title">ECourses</div> */}
      <h2>ECourse</h2>
      <div className="searchBar_main">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
    </div>
  );
}

export default Header;

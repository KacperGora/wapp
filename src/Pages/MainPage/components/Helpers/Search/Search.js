import React from "react";
import classes from "./Search.module.css";

function Search({ onSearch, placeholder, toSearch, setToSearch }) {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBox}>
        <input
        className={classes.searchInput}
          // onFocus={() => onTouch(true)}
          onChange={(e) => onSearch(e.target.value)}
          type="search"
          placeholder={placeholder}
        />
      
      </div>
    </div>
  );
}

export default Search;

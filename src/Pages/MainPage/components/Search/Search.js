import React from "react";
import classes from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";

function Search({ onSearch, onTouch }) {
  const searchHandler = (e) => {};
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBox}>
        <input
          onFocus={() => onTouch(true)}
          onChange={(e) => onSearch(e.target.value)}
          type="search"
          placeholder="Szukaj lub rozpocznij nowy czat"
        />
        <span onClick={searchHandler} className={classes.icon}>
          <HiOutlineSearch />
        </span>
      </div>
    </div>
  );
}

export default Search;

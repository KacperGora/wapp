import React, { useState } from "react";
import classes from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { CgSortAz } from "react-icons/cg";
function Search() {
  const [searchInputValue, setSearchInputValue] = useState("");
 const searchHandler = e => {
  
 }
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBox}>
        <input
          onChange={(e) => setSearchInputValue(e.target.value)}
          type="search"
          placeholder="Szukaj lub rozpocznij nowy czat"
        />
        <span onClick={searchHandler} className={classes.icon}>
          <HiOutlineSearch />
        </span>
      </div>
      <span className={classes.icon}>
        <CgSortAz />
      </span>
    </div>
  );
}

export default Search;

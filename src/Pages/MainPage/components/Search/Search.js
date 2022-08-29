import React from "react";
import classes from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { CgSortAz } from "react-icons/cg";
function Search() {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBox}>
        <input type="search" placeholder="Szukaj lub rozpocznij nowy chat." />
        <span className={classes.icon}>
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

import React from "react";
import classes from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
function Search({ onSearch, placeholder, toSearch, setToSearch }) {
  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBox}>
        <input
          // onFocus={() => onTouch(true)}
          onChange={(e) => onSearch(e.target.value)}
          type="search"
          placeholder={placeholder}
        />
        <span className={classes.icon}>
          {!toSearch ? (
            <HiOutlineSearch />
          ) : (
            <MdOutlineCancel
              onClick={() => {
                setToSearch(false);
                onSearch("");
              }}
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default Search;

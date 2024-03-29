import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="post">Post</Link>
      </li>
      <li>
        <Link to="about ">About</Link>
      </li>
    </nav>
  );
};

export default Nav;

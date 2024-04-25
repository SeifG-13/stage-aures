import React, { useState } from "react";
import "./SearchButton.css";
import { Magnifyingglass1 } from "./../../Icons/SearchIcon";
// import { query, setQuery } from "./../../Cards/Cards";

export default function SearchButton({ query, setQuery }) {
  return (
    <>
      <div className="search-button">
        <div className="overlap-group">
          <button type="button">
            <Magnifyingglass1 className="magnifying-glass" color="white" />
          </button>
        </div>
        <input
          type="search"
          className="search_Product"
          placeholder="Search Product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
}

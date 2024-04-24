import React from "react";
import "./SearchButton.css";
import { Magnifyingglass1 } from "./../../Icons/SearchIcon";

export default function SearchButton() {
  return (
    <>
      <div className="search-button">
        <div className="overlap-group">
          <Magnifyingglass1 className="magnifying-glass" color="white" />
        </div>
        <div className="search-product">Search Product</div>
      </div>
    </>
  );
}

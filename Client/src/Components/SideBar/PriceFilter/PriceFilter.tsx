import "./PriceFilter.css";
import React, { useState, useEffect } from "react";

// import Slider from "@material-ui/core/Slider";

export default function PriceFilter() {
  return (
    <>
      <div className="filterContainer">
        <div className="head">Filter By Price</div>
        <input
          placeholder="noth"
          type="range"
          name="price"
          // max={maxPrice}
          // min={minPrice}
          // value={price}
          // onChange={updatefiltervalue}
          className="range"
        />
      </div>
    </>
  );
}

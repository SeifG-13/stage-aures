import React from "react";
import "./SideBar.css";
import SearchButton from "./SearchButton/SearchButton";
import Categorie from "./Categorie/Categorie";
// import SideBanner from "./SideBanner/SideBanner";

export default function SideBar() {
  return (
    <>
      <div className="SideBarContainer">
        <div className="rectangle">
          <SearchButton />
          <Categorie />
          {/* <SideBanner /> */}
        </div>
      </div>
    </>
  );
}

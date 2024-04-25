import React from "react";
import "./SideBar.css";
import SearchButton from "./SearchButton/SearchButton";
import Categorie from "./Categorie/Categorie";
import SideBanner from "./SideBanner/SideBanner";
import PriceFilter from "./PriceFilter/PriceFilter";
import LatestProd from "./latestProduct/latestProduct";

export default function SideBar({ filterCategories, query, setQuery }) {
  return (
    <>
      <div className="SideBarContainer">
        <div className="rectangle">
          <SearchButton query={query} setQuery={setQuery} />
          <Categorie filterCategories={filterCategories} />
          <SideBanner />
          <PriceFilter />
          <LatestProd />
          <div className="Product_Tags">
            <div className="texthead">Product Tags</div>
            <div className="Tags">
              <div className="firstLine">
                <button>Service</button>
                <button>Our Menu</button>
                <button>Pizza</button>
              </div>
              <div className="secondLine">
                <button>Cup Cake</button>
                <button>Burger</button>
                <button>Cookies</button>
              </div>
              <div className="thirdLine">
                <button>Our Shop</button>
                <button>Tandoori</button>
                <button>Chicken</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./Cards.css";
import SideBar from "../SideBar/SideBar";
import Pagination from "../Pagination/Pagination";
import DollarAmount from "./DollarSign";
import { Link } from "react-router-dom";

export const context = React.createContext();

export default function Cards() {
  const [items, setitems] = useState([]);
  const [query, setQuery] = useState("");
  const [filtredItems, setFiltredItems] = useState([]);
  console.log("items: ", items);

  //Get All SHOPITEMS
  const getitems = async () => {
    try {
      const response = await fetch("http://localhost:5000/allitems");
      const jsonData = await response.json();
      setitems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //Filter By Price Range
  // const filterprice = items.filter((item) => {
  //   return;
  // });

  //Filter By Search
  const searchedfood = items.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  //Filter By Categorie
  const filterCategories = (category) => {
    console.log("category", category);
    const newItems = items.filter(
      (item) => item.Categorie.toLowerCase() === category.toLowerCase()
    );
    console.log("items: ", filtredItems);
    setFiltredItems(newItems);
  };

  useEffect(() => {
    getitems();
  }, []);

  console.log(items);

  const cardsItem = filtredItems.length > 0 ? filtredItems : items;

  return (
    <div className="container">
      <div className="d-flex flex-row bd-highlight my-3">
        <div className="p-2 bd-highlight">
          <label id="L1">
            Sort By :{" "}
            <select name="Sort">
              <option value="SortDefault" autoFocus>
                Default
              </option>
              <option value="SortNewest">Newest</option>
              <option value="low">Low to High Price</option>
              <option value="high">High to Low Price</option>
            </select>
          </label>
        </div>
      </div>
      <div className="ShopList">
        <div className="cards">
          {items.map((item) => {
            return (
              <context.Provider value={[items, setitems]}>
                <div key={item.itemid} className="col-sm">
                  <div className="cardcontainer">
                    <Link to="/ShopDetails">
                      <img alt="NOnO" src="./assert/Burgir.png" />
                    </Link>
                    <h1 className="productname">{item.title}</h1>
                    <p className="price">
                      <DollarAmount value={item.price} />
                      <s className="reducedPrice">
                        <DollarAmount value={item.reducedprice} />
                      </s>
                    </p>
                  </div>
                </div>
              </context.Provider>
            );
          })}
        </div>
        <SideBar
          className="SideBar"
          filterCategories={filterCategories}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <div className="center">
        <Pagination />
      </div>
    </div>
  );
}

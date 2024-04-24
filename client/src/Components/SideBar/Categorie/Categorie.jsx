import React from "react";
import "./Categorie.css";

export default function SideBar() {
  const itemList = [
    {
      id: "1",
      Categorie: "Sandwiches",
    },
    {
      id: "2",
      Categorie: "Burger",
    },
    {
      id: "3",
      Categorie: "Chicken Chup",
    },
    {
      id: "4",
      Categorie: "Drink",
    },
    {
      id: "5",
      Categorie: "Pizza",
    },
    {
      id: "6",
      Categorie: "Thi",
    },
    {
      id: "7",
      Categorie: "Sandwiches",
    },
    {
      id: "8",
      Categorie: "DK",
    },
  ];
  return (
    <>
      <div className="CategorieCotainer">
        <div className="Title">Categorie</div>
        {itemList.map((item) => {
          return (
            <div key="item.id" className="form-check">
              <label className="form-check-label" for="flexCheckDefault">
                {item.Categorie}
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.Categorie}
                  id="flexCheckDefault"
                />
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

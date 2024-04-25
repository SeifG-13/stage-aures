import React from "react";
import "./latestProduct.css";

export default function latestProduct() {
  return (
    <>
      <div className="latestContainer">
        <div className="head">Latest Products</div>
        <div className="smallCard">
          <img className="smallimg" alt="" src="assert/lateProd.png"></img>
          <div>
            <div className="prodName">Pizza</div>
            <div className="rating">rating</div>
            <div className="priceTag">$38.00</div>
          </div>
        </div>
        <div className="smallCard">
          <img className="smallimg" alt="" src="assert/lateProd.png"></img>
          <div>
            <div className="prodName">Pizza</div>
            <div className="rating">rating</div>
            <div className="priceTag">$38.00</div>
          </div>
        </div>
        <div className="smallCard">
          <img className="smallimg" alt="" src="assert/lateProd.png"></img>
          <div>
            <div className="prodName">Pizza</div>
            <div className="rating">rating</div>
            <div className="priceTag">$38.00</div>
          </div>
        </div>
        <div className="smallCard">
          <img className="smallimg" alt="" src="assert/lateProd.png"></img>
          <div>
            <div className="prodName">Pizza</div>
            <div className="rating">rating</div>
            <div className="priceTag">$38.00</div>
          </div>
        </div>
      </div>
    </>
  );
}

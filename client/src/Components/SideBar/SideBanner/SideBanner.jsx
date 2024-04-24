import React from "react";
import { Arrowcircleright1 } from "./../../Icons/Arrowcircleright";
import "./SideBanner.css";

export default function SideBanner() {
  return (
    <div className="SideBanner">
      <div className="text1">Perfect Taste</div>
      <div className="text2">Classic Restaurant</div>
      <div className="Price">45.00$</div>
      <div className="shop-now">
        <div className="div">Shop Now</div>
        <Arrowcircleright1 className="arrow-circle-right" color="white" />
      </div>
    </div>
  );
}

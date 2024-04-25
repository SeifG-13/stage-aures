import React from "react";
import { Arrowcircleright1 } from "./../../Icons/Arrowcircleright";
import "./SideBanner.css";

export default function SideBanner() {
  return (
    <div className="box">
      <div className="banner-wrapper">
        <div className="banner">
          <div className="overlap-group">
            <div className="text-wrapper">Perfect Taste</div>
            <div className="shop-now">
              <Arrowcircleright1 className="arrow-circle-right" color="white" />
              <button type="button" className="div">
                Shop Now
              </button>
            </div>
            <div className="text-wrapper-2">45.00$</div>
            <div className="text-wrapper-3">Classic Restaurant</div>
          </div>
        </div>
      </div>
    </div>
  );
}

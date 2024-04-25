import "./carousel.css";
import React, { useContext } from "react";
import DollarAmount from "./../../../Components/Cards/DollarSign";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Caroussel() {
  //fetch filtred data from DB for carousel
  return (
    <>
      <div className="similar-Products">
        <div className="sim-Prod">
          <h1 className="similarTitle">Similar Products</h1>
          {/* <div className="prevNextButton">
            <button className="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#b0afad"
                class="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
            </button>
            <button className="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="rgb(255 159 13)"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </button>
          </div> */}
        </div>
        <div className="carousel">
          <Carousel breakPoints={breakPoints}>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
            <div>
              <div className="cardcontainer">
                <Link to="/ShopDetails">
                  <img alt="NOnO" src="assert/FreshLime.png" />
                </Link>
                <h1 className="productname">adad</h1>
                <p className="price">
                  <DollarAmount value="12" />
                  <s className="reducedPrice">
                    <DollarAmount value="25" />
                  </s>
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

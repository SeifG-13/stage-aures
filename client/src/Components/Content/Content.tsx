import React, { useEffect } from "react";
import "./Content.css";

const Content = () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;
  // useEffect(() => {

  // }, [screenWidth])

  return (
    <>
      <div className="container100">
        <div className="container1">
          <img
            alt=""
            src="./../../../public/assert/Line 1.png"
            className="line1"
          />
          <img alt="" src="./assert/1.png" className="img1" />
          <img alt="" src="./assert/2.png" className="img2" />
          <img alt="" src="./assert/3.png" className="img3" />
          <img
            alt=""
            src="./../../../public/assert/Line 1.png"
            className="line2"
          />
        </div>
        <div className="container2">
          <div className="titre">Its Quick & Amusing!</div>
          <div className="titre-2">
            <span style={{ color: "#FF9F0D" }}>Th</span>e Art of speed food
            Quality
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
          <button className="btn" type="button">
            {" "}
            <span style={{ color: "#FFFF" }}>See Menu</span>
          </button>
        </div>
        {/* <div className="container3">
      <img src="@asset/images/Rectangle1.png"className="plat"  />
      <img src="@asset/images/Ellipse 22.png"className="ellipse" />
      <img src="@asset/images/image 2.png"className="feuille" />
      {screenWidth > 980 ? (
          <img src="@asset/images/Rectangle 3.png"className="plat1" />
        ) : (
          null
        )}
        {screenWidth > 980 ? (
        <img src="@asset/images/unsplash4.png"className="plat2" />
      ) : (
        <img src="@asset/images/unsplash4.png"className="plat21" />

        )}
        {screenWidth > 620 ? (
      <img src="@asset/images/unsplash5.png"className="plat3" />
      ) : (
          null
        )}
      <img src="@asset/images/Rectangle 6.png"className="plat4" />
    </div> */}
      </div>
    </>
  );
};

export default Content;

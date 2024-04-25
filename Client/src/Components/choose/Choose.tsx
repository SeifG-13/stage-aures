import React from "react";
import "./choose.css";
const Choose = () => {
  return (
    <div className="choosegrid">
      <div className="whyus">
        <div className="choosetitre">Why Choose us</div>
        <div className="choosesoustitre">
          <div>
            <span style={{ color: "#FF9F0D" }}>Ex</span>ta ordinary taste
          </div>{" "}
          And Experienced{" "}
        </div>
        <p className="choosepara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="choosecard">
          <div className="flexchoosepic">
            <img
              className="choosecardicon1"
              src="./assert/choosecard1.png"
              alt=""
            />
            <img
              className="choosecardicon2"
              src="./assert/choosecard2.png"
              alt=""
            />
            <img
              className="choosecardicon3"
              src="./assert/choosecard3.png"
              alt=""
            />
          </div>
          <div className="flexchoosetitre">
            <div className="choosetitreitem1">Fast Food</div>
            <div className="choosetitreitem2">Lunch</div>
            <div className="choosetitreitem3">Dinner</div>
          </div>
        </div>
        <div className="chooseexperience">
          <span className="choose30" style={{ color: "#FF9F0D" }}>
            30+
          </span>
          <span className="chooseyears">Years of</span>
          <span className="chooseexperienced">Experienced</span>
        </div>
      </div>
      <div className="choosepic">
        <div className="chrow1">
          <img className="chpic1" src="./assert/choosepic1.png" alt="" />
          <img className="chpic2" src="./assert/choosepic2.png" alt="" />
        </div>
        <div className="chrow2">
          <img className="chpic3" src="./assert/choosepic3.png" alt="" />
          <img className="chpic4" src="./assert/choosepic4.png" alt="" />
          <img className="chpic5" src="./assert/choosepic5.png" alt="" />
          <img className="chpic6" src="./assert/choosepic6.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choose;

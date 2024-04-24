import React from "react";
import "./Footer.css";
import FooterCard from "./FooterCard";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container11">
        <div className="titre">
          <span style={{ color: "#FF9F0D" }}>St</span>ill You need Our Support ?
        </div>
        <p>Don't wait make a smart & logical quote here. Its pretty easy</p>
        <form action="" className="mail">
          <input type="search" placeholder="Entrer Your Email" />
          <button type="submit" className="subbtn">
            Subscribe Now
          </button>
        </form>
      </div>
      <div className="vector">
        <img
          alt="footer iamge"
          src="./assert/Vector 17.png"
          style={{
            width: "80%",
            marginLeft: "10%",
          }}
        />
      </div>

      <div className="information1">
        <div className="container12">
          <div className="aboutus">
            <span className="titreAboutUs"> About Us. </span>
            <p className="pabout">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="openHours">
              <img alt="clock" className="hours" src="./assert/clock.png" />
              <span className="p1">Opening Houres</span>
              <span className="p2">Mon - Sat(8.00 - 6.00)</span>
              <span className="p3">Sunday - Closed</span>
            </div>
          </div>
          <div className="usefullinks">
            <span className="tusefullinks">Useful Links</span>
            <ul className="pusefull">
              <li>About</li>
              <li>News</li>
              <li> Partners</li>
              <li>Team</li>
              <li> Menu</li>
              <li> Contacts</li>
            </ul>
          </div>
          <div className="Help">
            <span className="help">Help?</span>
            <ul className="phelp">
              <li>FAQ</li>
              <li> Term & conditions</li>
              <li> Reporting</li>
              <li> Documentation</li>
              <li> Support Policy</li>
              <li> Privacy</li>
            </ul>
          </div>
          <div className="RecentPost">
            <span className="recent">Recent Post</span>
            <FooterCard
              info={{
                img: "./assert/recent1.png",
                date: "20 Feb 2022",
                para: "Keep Your Business ",
              }}
            />
            <FooterCard
              info={{
                img: "./assert/recent2.png",
                date: "20 Feb 2022",
                para: "Keep Your Business ",
              }}
            />
            <FooterCard
              info={{
                img: "./assert/recent3.png",
                date: "20 Feb 2022",
                para: "Keep Your Business ",
              }}
            />
          </div>
        </div>
        <div className="container13">
          <span className="copyright">
            Copyright © 2023 by Seif. All Rights{" "}
          </span>
          <div className="social-icons">
            <a className="icon-social" href="#">
              <img alt="icon" src="./assert/20.png" />
            </a>
            <a className="icon-social" href="#">
              <img alt="icon" src="./assert/21.png" />
            </a>
            <a className="icon-social" href="#">
              <img alt="icon" src="./assert/22.png" />
            </a>
            <a className="icon-social" href="#">
              <img alt="icon" src="./assert/23.png" />
            </a>
            <a className="icon-social" href="#">
              <img alt="icon" src="./assert/24.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

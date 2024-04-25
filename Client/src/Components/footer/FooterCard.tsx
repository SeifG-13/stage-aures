import React from "react";
import "./FooterCard.css";
const FooterCard = (props: any) => {
  return (
    <div className="cardf">
      <img alt="footer iamge" className="image" src={props.info.img} />
      <div className="date">{props.info.date}</div>
      <div className="para">{props.info.para}</div>
    </div>
  );
};

export default FooterCard;

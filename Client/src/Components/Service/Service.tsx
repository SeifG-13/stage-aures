import React from "react";
import "./Service.css";
const Service = (props: any) => {
  return (
    <div className="service">
      <img alt="" src="./assert/service1.png" className="ima1" />
      <img alt="" src="./assert/service2.png" className="ima2" />
      <img alt="" src="./assert/service3.png" className="ima3" />
      <img alt="" src="./assert/service4.png" className="ima4" />
      <span className="pro1">Professional Chefs</span>
      <span className="pro2">Items Of Food</span>
      <span className="pro3">Years Of Experienced</span>
      <span className="pro4">Happy Customers</span>
      <span className="num1">{props.info.num1}</span>
      <span className="num2">{props.info.num2}</span>
      <span className="num3">{props.info.num3}</span>
      <span className="num4">{props.info.num4}</span>
    </div>
  );
};

export default Service;

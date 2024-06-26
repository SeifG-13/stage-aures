import React from "react";
import "./List.css";
const List = (props: any) => {
  return (
    <div>
      <div className="list">
        <div className="titreL">{props.info.titre}</div>
        <div className="parag">{props.info.parag}</div>
        <img alt="" className="image1" src={props.info.im1} />
        <img alt="" className="image2" src={props.info.im2} />
        <img alt="" className="image3" src={props.info.im3} />
        <img alt="" className="image4" src={props.info.im4} />
      </div>
    </div>
  );
};

export default List;

import React, { useContext } from "react";
import "./ShopDetails.css";
import Banner from "../../Components/Banner/Banner";
import Nav from "../../Components/notHomeNav/Nav";
import Footer from "../../Components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DollarAmount from "./../../Components/Cards/DollarSign";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { BiHeart } from "react-icons/bi";
// import Carousel from "./carousel/carousel";
import { context } from "./../../../src/Components/Cards/Cards";

export default function ShopDetails() {
  let [quantity, setQuantity] = useState(1);
  // const [items, setitems] = useContext(context);


	
	const [img, setImg] = useState()
	const [title, setTitle] = useState()
	const [price, setPrice] = useState()
	const [reducedPrice, setReducedPrice] = useState()
 
  
	const handleSubmit = async (e) => {
	  e.preventDefault()
	  
	  const response = await fetch("http://localhost:5000/cart", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({img, title, price, reducedPrice})
	  })
  
	  const data = await response.json()
  
	  
  }




  return (
    <>
      <Nav />
      <Banner />
      <div className="shopDetails">
        <Link to="/shop">
          <button className="inStock">Go Back</button>
        </Link>
        <div className="cardDetails">
          <img className="detailcardimg" alt="" src="assert/FreshLime.png"  image={(e) => setImg(e.target.value)}/>
          <div className="cardInfo">
            <button className="inStock">In Stock</button>
            <h1 className="detailTitle"  titre={(e) => setTitle(e.target.value)}>item Name</h1>
            <div className="detaildescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </div>
            <hr />
            <div className="detailPrice">
              <DollarAmount value="55"  prix={(e) => setPrice(e.target.value)} />
              <s className="detailreducedPrice">
                <DollarAmount value="70"  prix2={(e) => setReducedPrice(e.target.value)}/>
              </s>
            </div>
            <div className="rating-wrapper">
              <img
                className="rating"
                alt="Rating"
                src="https://generation-sessions.s3.amazonaws.com/ebf91285a39079057b015ce2f7dc6589/img/rating.png"
              />
            </div>
            <div>Dictum/cursus/Risus</div>
            <div className="itemQuantity">
              <div className="plusminus">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <button>{quantity}</button>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <input type="submit" placeholder="Add To Cart" className="create" onClick={(e) => handleSubmit(e)} />
              {/* <button className="addtocart">Add To Cart</button> */}
            </div>
            <hr />
            <div className="addtowich">
              {/* <BiHeart className="heart" /> */}
              Add To Cart
            </div>
            <div className="detailcategorie">Categorie : itemcat</div>
          </div>
        </div>
        {/* <Carousel /> */}
      </div>
      <Footer />
    </>
  );
}

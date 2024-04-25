import "./Cart.css";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/notHomeNav/Nav";
import Footer from "../../Components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from 'react'
import DollarAmount from "../../Components/Cards/DollarSign";
import React, { useEffect } from "react";


export const context = React.createContext();










export default function Cart() {
	

  const [payer, setPayer] = useState([]);
  // const [img, setImg] = useState()
	// const [title, setTitle] = useState()
	// const [price, setPrice] = useState()
	// const [reducedPrice, setReducedPrice] = useState()


  //Get All cartitem
  const getpayer= async () => {
    try {
      const response = await fetch("http://localhost:5000/cart1");
      const json = await response.json();
      setPayer(json);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getpayer();
  }, []);

  console.log(payer)

  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      <div className="Cart">
      {payer.map((payer) => {
            return (
              <context.Provider value={[payer, setPayer]}>
                <div  className="col-sm">
                  <div className="cardcontainer">
                   
                      <img alt="NOnO" src="./assert/Burgir.png" />
                    
                    <h1 className="productname">{payer.title}</h1>
                    <p className="price">
                      <DollarAmount value={payer.price} />
                      <s className="reducedPrice">
                        <DollarAmount value={payer.reducedprice} />
                      </s>
                    </p>
                  </div>
                </div>
              </context.Provider>
            );
          })}
      
        
      </div>
      <Footer />
    </>
  );
}
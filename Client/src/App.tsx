import React from "react";
import "./App.css";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import SignUp from "./page/Sign Up/SignUp";
import SignIn from "./page/Sign In/SignIn";
import P404 from "./page/404/P404";
import ShopDetails from "./page/Shop Details/ShopDetails";
import Cart from "./page/Cart/Cart";
// import Test from "./page/TestPage/Test";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies()
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  return (
    <>
    {!authToken && <SignIn/>}
    {authToken &&
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ShopDetails" element={<ShopDetails />} />
        <Route path="/Sign Up" element={<SignUp />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Sign In" element={<SignIn />} />
        <Route path="/404" element={<P404 />} />
        {/* <Route path="/Test" element={<Test />} /> */}
      </Routes>}
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./page/Home/Home";
import Menu from "./page/Menu/Menu";
import SignUp from "./page/Sign Up/SignUp";
import SignIn from "./page/Sign In/SignIn";
import P404 from "./page/404/P404";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Sign Up" element={<SignUp />} />
        <Route path="/Sign In" element={<SignIn />} />
        <Route path="/404" element={<P404 />} />
      </Routes>
    </>
  );
}

export default App;

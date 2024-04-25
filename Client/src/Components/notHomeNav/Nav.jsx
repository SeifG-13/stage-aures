import React from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import logo from "./Foodtuck.png";
import DeleteCookie from "../../hooks/DeleteCookie";
import { BiUser, BiShoppingBag, BiHeart } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
const signOut = () => {
  console.log('signout')
  DeleteCookie('Email')
  DeleteCookie('AuthToken')
  window.location.reload()

}
export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/404">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/404">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/404">Pages</NavLink>
        </li>
        <li>
          <NavLink to="/404">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/404">Contact</NavLink>
        </li>
      </ul>
      <div className="icons">
        <button>
          <FiSearch />
        </button>
        <Link to="/login">
          <BiUser />
        </Link>
        <Link to="/wishlist">
          <BiHeart />
        </Link>
        <Link to="/cart">
          <BiShoppingBag />
        </Link>
        <button className="signout" onClick={signOut}>SIGN OUT</button>
      </div>
    </nav>
  );
}

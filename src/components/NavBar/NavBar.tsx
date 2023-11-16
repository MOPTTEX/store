import React from "react";
import "./NavBar.css";
import { Link, Route, Routes } from "react-router-dom";
import DevicePage from "../../pages/DevicePage/DevicePage";
import BasketPage from "../../pages/BasketPage/BasketPage";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/reducers/CartSlice";

export default function NavBar() {

  const cartItems = useSelector(selectCartItems);

  return (
    <>
    <nav className="navbar">
      <Link to="/store" className="navbar_links">
        Каталог
      </Link>
      <Link to="/basket" className="navbar_links">
        Корзина товаров
      </Link>
      <div className="navbar_counter">{cartItems.length}</div>
    </nav>
    <Routes>
    <Route path="/store" element={<DevicePage/>} />
    <Route path="/basket" element={<BasketPage />} />
  </Routes>
  </>
  );
}
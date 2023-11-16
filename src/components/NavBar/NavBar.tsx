import React from "react";
import "./NavBar.css";
import { Link, Route, Routes } from "react-router-dom";
import DevicePage from "../../pages/DevicePage/DevicePage";
import BasketPage from "../../pages/BasketPage/BasketPage";

export default function NavBar() {
  return (
    <>
    <nav className="navbar">
      <Link to="/store" className="navbar_links">
        Магазин
      </Link>
      <Link to="/basket" className="navbar_links">
        Корзина товаров
      </Link>
      <div className="navbar_counter">10</div>
    </nav>
    <Routes>
    <Route path="/store" element={<DevicePage/>} />
    <Route path="/basket" element={<BasketPage />} />
  </Routes>
  </>
  );
}
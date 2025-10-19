import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import SinglePage from "./pages/single";
import FilterPage from "./pages/filter";
import Layout from './components/layout/index';
import ProfilePage from "./pages/profile";
import CatalogPage from "./pages/catalog";
import Cart2Page from "./pages/cart-2";
import Caruesel from "./pages/carousel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="single/:id" element={<SinglePage />} />
          <Route path="filter/:categoryId" element={<FilterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="cart-2" element={<Cart2Page />} />
          <Route path="car" element={<Caruesel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

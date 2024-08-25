import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './layouts/MainPage';
import Shop from './layouts/Shop';
import Categories from './layouts/Categories';
import ContactUs from './layouts/ContactUs';
import AboutUs from './layouts/AboutUs';
import ProductPage from './layouts/ProductPage';
import ProductsOfCategory from './layouts/ProductsOfCategory';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/contact-us" element={<ContactUs />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/product/*" element={<ProductPage />}></Route>
              <Route path="/categories/*" element={<ProductsOfCategory />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

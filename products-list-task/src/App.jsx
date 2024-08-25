import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './layouts/MainPage';
import Shop from './layouts/Shop';

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

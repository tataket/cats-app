import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./NavBar/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAdoption from "./Components/Form/Form.jsx";
import CatsInfo from "./Components/CatsInfo/CatsInfo.jsx";

function App() {
  return (
    <>
      <h1>ADOPT KITTENS</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/adocao/:name" element={<FormAdoption />} />
          <Route path="/info/:name" element={<CatsInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

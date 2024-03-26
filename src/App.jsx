import { useState } from "react";
import "./App.css";
import Navbar from "./NavBar/Nav.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Home from "./Components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CATZINHOS SHOP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

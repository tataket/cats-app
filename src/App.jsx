import "./App.css";
import Navbar from "./Components/NavBar/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAdoption from "./Components/Form/Form.jsx";
import CatsInfo from "./Components/CatsInfo/CatsInfo.jsx";
import { Provider } from 'react-redux';
import store from "./Components/Form/store.js";
import { MainTitle } from "./styled.js";

function App() {
  return (
    <>
      <MainTitle>ADOPT KITTENS</MainTitle>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/adocao/:name" element={<FormAdoption />} />
          <Route path="/info/:name" element={<CatsInfo />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

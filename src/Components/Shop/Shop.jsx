import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cats from "../Cats/cats.json";
import Card from "../../Components/Cards/Cards";
import { ShopContainer } from "./styled.js";

function CatsList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [catsData, setCatsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const catsPerPage = 5;

  useEffect(() => {
    setCatsData(Object.values(Cats));
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page"));
    if (!isNaN(page) && page !== currentPage) {
      setCurrentPage(page);
    }
  }, [location.search, currentPage]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  const goToPage = (page) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", page);
    navigate(`?${queryParams.toString()}`);
  };

  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = catsData.slice(indexOfFirstCat, indexOfLastCat);

  const nextPage = () => {
    if (indexOfLastCat < catsData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      goToPage(currentPage - 1);
    }
  };

  return (
    <>
      <h2>Catzinhos</h2>
      <ShopContainer>
        {currentCats.map((cat, index) => (
          <Card key={index} {...cat} />
        ))}
      </ShopContainer>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button onClick={nextPage} disabled={indexOfLastCat >= catsData.length}>
          Próxima
        </button>
      </div>
    </>
  );
}

export default CatsList;

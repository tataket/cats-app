import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cats from "../Cats/cats.json";
import Card from "../../Components/Cards/Cards";
import { ShopContainer, PageNumber, ButtonGroup, Button } from "./styled.js";

function CatsList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [catsData, setCatsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const catsPerPage = 10;

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
      <ShopContainer>
        {currentCats.map((cat, index) => (
          <Card key={index} {...cat} />
        ))}
      </ShopContainer>
      <ButtonGroup>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Back
        </Button>
        <PageNumber>{currentPage}</PageNumber>
        <Button onClick={nextPage} disabled={indexOfLastCat >= catsData.length}>
          Next
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CatsList;

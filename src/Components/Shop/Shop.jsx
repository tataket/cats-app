import React, { useEffect, useState } from "react";
import { Container } from "./styled.js";
import { Link } from "react-router-dom";

function CatsList() {
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    fetch("src/Components/Cats/cats.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cats data");
        }
        return response.json();
      })
      .then((data) => {
        setCatsData(Object.values(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Catzinhos</h2>
      {catsData.map((cat, index) => (
        <Container key={index}>
          <img src={cat.image} alt={cat.name} style={{ maxWidth: "300px" }} />
          <h3>{cat.name}</h3>
          <p>Raça: {cat.race}</p>
          <p>Cor: {cat.color}</p>
          <p>Peso: {cat.weight} kg</p>
          <p>Idade: {cat.age} anos</p>
          <p>Localização: {cat.location}</p>
          <Link to={`/adocao/${cat.name}`}>
            <button>Adopt</button>
          </Link>
        </Container>
      ))}
    </div>
  );
}

export default CatsList;

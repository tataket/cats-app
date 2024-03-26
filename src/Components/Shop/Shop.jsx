import React, { useEffect, useState } from "react";
import {Container} from "./styled.js";

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
      <h2>List Catzinhos</h2>
      {catsData.map((cat) => (
        <Container>
          <img src={cat.image} alt={cat.name} style={{ maxWidth: "300px" }} />
          <h3>{cat.name}</h3>
          <p>Raça: {cat.race}</p>
          <p>Cor: {cat.color}</p>
          <p>Peso: {cat.weight} kg</p>
          <p>Idade: {cat.age} anos</p>
          <p>Localização: {cat.location}</p>
          <p>Preço: ${cat.price}</p>
        </Container>
      ))}
    </div>
  );
}

export default CatsList;

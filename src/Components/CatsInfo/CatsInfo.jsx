import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import catDb from "../Cats/cats.json";
import {
  CatDetailsContainer,
  CatImage,
  CatDetails,
  CatName,
  ReturnButton,
  AdoptButton,
  ButtonContainer
} from "./styled.js";

function CatsInfo() {
  const { name } = useParams();
  const [catState, setCatsData] = useState();

  useEffect(() => {
    const findInDb = Object.values(catDb).find((cat) => cat.name === name);
    setCatsData(findInDb);
  }, [name]);

  return (
    <CatDetailsContainer>
      {catState ? (
        <div>
          <CatName>{catState.name}</CatName>
          <CatImage src={catState.image} alt="cat" />
          <CatDetails>Race: {catState.race}</CatDetails>
          <CatDetails>Color: {catState.color}</CatDetails>
          <CatDetails>Weight: {catState.weight} kg</CatDetails>
          <CatDetails>Age: {catState.age}</CatDetails>
          <CatDetails>Location: {catState.location}</CatDetails>
          <ButtonContainer>
          <ReturnButton to="/shop">
            Return</ReturnButton>
          <AdoptButton to={`/adocao/${catState.name}`}>Adopt Me?</AdoptButton>
          </ButtonContainer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </CatDetailsContainer>
  );
}

export default CatsInfo;

import {
  ContainerText,
  Text,
  Title,
  FinalText,
  ImgMarquee,
  MarqueeContainer,
  ImgCats,
} from "./styled.js";
import React, { useEffect, useState } from "react";
import CatsFamily from "./../../assets/Images/gatinhos.jpeg";
import jsonData from "../Cats/cats.json";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("currentPage", "1");
  }, []);

  const catImages = Object.values(jsonData).map((cat) => cat.image);

  return (
    <>
      <ContainerText>
        <Title>How this dream started... </Title>
        <Text>
          In a town where cats were revered, Luna and her kittens faced
          abandonment and hardship. Rescued by a compassionate shelter
          volunteer, they found safety, care, and a second chance, highlighting
          the importance of compassion and shelter adoption.
        </Text>
        <FinalText>Ready to embark on this journey together?!</FinalText>
      </ContainerText>
      {<ImgCats src={CatsFamily} style={{ marginBottom: "20px" }} />}

      <MarqueeContainer>
        <marquee>
          {catImages.map((image, index) => (
            <ImgMarquee
              key={index}
              src={image}
              alt={`Cat ${index + 1}`}
              style={{ marginRight: "20px" }}
            />
          ))}
        </marquee>
      </MarqueeContainer>
    </>
  );
};

export default Home;

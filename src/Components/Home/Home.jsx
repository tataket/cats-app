import { ContainerText , Text} from "./styled.js";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("currentPage", "1");
  }, []);

  return (
    <>
      <ContainerText>
        <Text>How this dream started... </Text>
        <Text>
        In a town where cats were revered, Luna and her kittens faced abandonment and hardship.
        Rescued by a compassionate shelter volunteer, they found safety, care,
        and a second chance, highlighting the importance of compassion and shelter adoption.
        </Text>
      </ContainerText>
    </>
  );
};

export default Home;

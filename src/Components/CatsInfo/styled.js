import styled from "styled-components";
import { Link } from "react-router-dom";

export const CatDetailsContainer = styled.div`
  display: inline-block;
  text-align: center;
  padding: 40px;
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CatImage = styled.img`
  width: 300px;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 250px;
    margin-bottom: 10px;
  }
`;

export const CatName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const CatDetails = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
`;

export const ReturnButton = styled(Link)`
  display: inline-block;
  background-color: #9742448f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
  transition: background-color 0.3s;

  &:hover {
    background-color: #974244;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const AdoptButton = styled(Link)`
  display: inline-block;
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

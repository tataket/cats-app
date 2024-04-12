import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  padding: 20px;
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.8);
  width: 40%;
  `;

export const Text = styled.h3`
    color: black;
    font-family: "Arial", sans-serif;
    margin: 4px 0;
    font-size: 18px; 
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-color: transparent;
`;

export const ImageCat = styled.img`
  border-radius: 9px;
  max-width: 300px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: none;
    border-color: transparent;
  }
`;

export const ImagePaw = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  border-color: transparent;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

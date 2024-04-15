import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  background-color: rgb(255 255 255 / 31%);
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 10px 10px 10px;
  gap: 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  @media (max-width: 768px) {
      padding: 10px;
    `;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-color: transparent;
`;

export const StyledButtonLink = styled.button`
  padding: 10px 20px;
  background-color: #9742448f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
  transition: background-color 0.3s;

  &:hover {
    background-color: #974244;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
`;



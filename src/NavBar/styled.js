import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 10px 10px 10px;
  gap: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-color: transparent;
`;

export const StyledButtonLink = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

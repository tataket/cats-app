import styled from "styled-components";

export const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: stretch;
  row-gap: 10px;
  column-gap: 20px;
  font-size: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    font-size: 1.5rem;
  }
`;

export const PageNumber = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #9742448f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #974244;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

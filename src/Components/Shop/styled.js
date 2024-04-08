import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 20px;
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.8);

  img {
    border-radius: 5px;
    margin-bottom: 8px;
  }

  h3 {
    color: black;
    font-family: 'Allura', cursive;
    margin: 4px 0;
  }

  button {
    padding: 8px 16px;
    margin-top: 8px;
    border: none;
    border-radius: 4px;
    background-color: #0077cc;
    color: white;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

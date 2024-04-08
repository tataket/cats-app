import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    margin: 0 10px;
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
  }`;
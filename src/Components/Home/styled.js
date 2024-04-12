import styled from "styled-components";

export const ContainerText = styled.div`
  padding: 20px;
  margin: 20px;

  &&:first-of-type {
    margin-top: 0;
    animation: fadeIn 2s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.h2`
  color: #333;
  font-family: "Arial", sans-serif;
  text-align: justify;
  line-height: 1.8;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

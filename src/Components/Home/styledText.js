import styledText from "styled-components";

export const ContainerText = styledText.div`
  padding: 20px;
  margin: 20px;
  background: linear-gradient(to right, #f2f2f2, #e6e6e6);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.8);

  h2 {
    color: #333;
    font-family: 'Allura', cursive;
    text-align: justify;
    line-height: 1.8;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  h2:first-of-type {
    margin-top: 0;
    color: #0077cc;
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

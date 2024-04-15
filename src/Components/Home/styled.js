import styled, { keyframes } from "styled-components";

export const ContainerText = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: rgb(255 255 255 / 31%);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  text-align: justify;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

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

  @media (max-width: 768px) {
    padding: 15px;
    margin: 15px;
  }
`;

export const Title = styled.h2`
  color: #333;
  font-family: "Arial", sans-serif;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const Text = styled.h2`
  color: #333;
  font-family: "Arial", sans-serif;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const FinalText = styled.h2`
  color: #333;
  font-family: "Arial", sans-serif;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const ImgCats = styled.img`
  width: auto;
  max-width: 100%;
  margin-bottom: 20px;
  height: auto;
  border-radius: 10px;
`;

export const ImgMarquee = styled.img`
  border-radius: 9px;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const marquee = keyframes`
display: inline-block;
white-space: nowrap;
animation: 10s linear infinite;

  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

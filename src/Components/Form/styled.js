import styled from "styled-components";

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
width: 100%;
margin: 20px auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 10px;
background-color: rgba(255, 255, 255, 0.8);
color: #000;
`;

export const Form = styled.form`
width: 100%;
`;

export const FormTitle = styled.h2`
  color: #000;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  `;

  export const SuccessMessage = styled.p`
  color: #4caf50; 
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
`;

export const LoadingMessage = styled.p`
  color: #333; 
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
`;

  export const CatInfoLabel = styled.label`
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
  color: #000;
  margin-bottom: 10px;
  width: 100%;
`;

export const CatInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  align-items: center;
  padding: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  `;

export const CatInfoInput = styled.input`
  margin-bottom: 10px;
  flex: 1;
  
  @media (min-width: 768px) {
    width: calc(48% - 10px);
  }
`;

export const AdoptionTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  `;

export const AdoptionInput = styled.input`
width: 100%;
margin-bottom: 10px;

&:disabled {
  color: rgba(255, 255, 255, 0.5);
}
`;

export const AdoptionButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px; 
  font-weight: normal;
  transition: background-color 0.3s;

&:hover {
  background-color: #45a049;
}`;

export const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")}; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
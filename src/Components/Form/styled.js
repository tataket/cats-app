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

h2 {
  color: #000;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
}

form {
  width: 100%;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input:disabled {
  color: rgba(255, 255, 255)
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}`;

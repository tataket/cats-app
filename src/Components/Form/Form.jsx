import React, { useState } from "react";
import {FormWrapper} from "./styleForm.js";

const formAdoption = ({ cat }) => {
  const [nomeAdotante, setNomeAdotante] = useState("");
  const [emailAdotante, setEmailAdotante] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Dados do formulário:");
    console.log("Nome do adotante:", nomeAdotante);
    console.log("Email do adotante:", emailAdotante);
    console.log("Mensagem:", mensagem);

    setNomeAdotante("");
    setEmailAdotante("");
    setMensagem("");
  };

  return (
    <FormWrapper>
      <h2>Form Adoption {cat}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nomeAdotante">Name:</label>
        <input
          type="text"
          id="nomeAdotante"
          value={nomeAdotante}
          onChange={(e) => setNomeAdotante(e.target.value)}
        />
        <br />
        <label htmlFor="emailAdotante">Email:</label>
        <input
          type="email"
          id="emailAdotante"
          value={emailAdotante}
          onChange={(e) => setEmailAdotante(e.target.value)}
        />
        <br />
        <label htmlFor="mensagem">Message:</label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

export default formAdoption;

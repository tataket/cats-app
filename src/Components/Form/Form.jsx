import React, { useState, useEffect } from "react";
import { FormWrapper } from "./styled.js";
import catDb from "../Cats/cats.json";
import { useParams } from "react-router-dom";

const formAdoption = () => {
  const { name } = useParams();
  const [catData, setCatData] = useState(null);
  const [nomeAdotante, setNomeAdotante] = useState("");
  const [emailAdotante, setEmailAdotante] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const findCat = Object.values(catDb).find((cat) => cat.name === name);
    if (findCat) {
      setCatData(findCat);
    }
  }, [name]);

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
      {catData ? (
        <>
          <h2>Form Adoption {catData.name}</h2>
          <div>
          <input
                type="text"
                id="race"
                defaultValue={catData.race}
                disabled
                placeholder="Race"
              />
              <input
                type="text"
                id="age"
                defaultValue={catData.age}
                disabled
                placeholder="Age:"
              />
              <input
                type="text"
                id="color"
                defaultValue={catData.color}
                disabled
                placeholder="Color:"
              />
              <input
                type="text"
                id="weight"
                defaultValue={catData.weight}
                disabled
                placeholder="Weight:"
              />
              <input
                type="text"
                id="location"
                defaultValue={catData.location}
                disabled
                placeholder="Location:"
              />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="nomeAdotante"
                value={nomeAdotante}
                onChange={(e) => setNomeAdotante(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                id="emailAdotante"
                value={emailAdotante}
                onChange={(e) => setEmailAdotante(e.target.value)}
                placeholder="Email"
              />
              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Message"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </FormWrapper>
  );
};

export default formAdoption;

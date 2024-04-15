import React, { useEffect, useState } from "react";
import {
  Form,
  FormTitle,
  FormWrapper,
  CatInfoWrapper,
  CatInfoInput,
  AdoptionInput,
  AdoptionTextArea,
  AdoptionButton,
  ModalWrapper,
  ModalContent,
  CloseButton,
  CatInfoLabel,
  SuccessMessage,
  LoadingMessage,
} from "./styled.js";
import catDb from "../Cats/cats.json";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCatData,
  setUserName,
  setEmail,
  setMessage,
  clearForm,
} from "./formSlice";

const FormAdoption = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { catData, username, email, message } = useSelector(
    (state) => state.form
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const findCat = Object.values(catDb).find((cat) => cat.name === name);
    if (findCat) {
      dispatch(setCatData(findCat));
    }
  }, [name, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (catData.name && username && email && message) {
      setIsModalOpen(true);
      setIsFormSubmitted(true);
    } else {
      alert("Please, fill in all required fields.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(clearForm());
  };

  return (
    <FormWrapper>
      {catData ? (
        <>
          <FormTitle>Form Adoption {catData.name}</FormTitle>
          <CatInfoWrapper>
            <CatInfoLabel>Race</CatInfoLabel>
            <CatInfoInput
              type="text"
              value={catData.race}
              disabled
              placeholder="Race"
            />
            <CatInfoLabel>Age</CatInfoLabel>
            <CatInfoInput
              type="text"
              value={catData.age}
              disabled
              placeholder="Age"
            />
            <CatInfoLabel>Color</CatInfoLabel>
            <CatInfoInput
              type="text"
              value={catData.color}
              disabled
              placeholder="Color"
            />
            <CatInfoLabel>Weight</CatInfoLabel>
            <CatInfoInput
              type="text"
              value={catData.weight}
              disabled
              placeholder="Weight"
            />
            <CatInfoLabel>Location</CatInfoLabel>
            <CatInfoInput
              type="text"
              value={catData.location}
              disabled
              placeholder="Location"
            />
          </CatInfoWrapper>
          <Form onSubmit={handleSubmit}>
            <AdoptionInput
              type="text"
              value={username}
              onChange={(e) => dispatch(setUserName(e.target.value))}
              placeholder="Name"
            />
            <AdoptionInput
              type="email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              placeholder="Email"
            />
            <AdoptionTextArea
              value={message}
              onChange={(e) => dispatch(setMessage(e.target.value))}
              placeholder="Message"
            />
            <AdoptionButton type="submit">Submit</AdoptionButton>
          </Form>
          <ModalWrapper isOpen={isModalOpen}>
            <ModalContent>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <SuccessMessage>
                Your adoption application form has been successfully submitted!
              </SuccessMessage>
            </ModalContent>
          </ModalWrapper>
        </>
      ) : (
        <LoadingMessage>Loading...</LoadingMessage>
      )}
    </FormWrapper>
  );
};

export default FormAdoption;

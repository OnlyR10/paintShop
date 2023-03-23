import React from "react";
import { ContactsContainer } from "../ContactsContainer/ContactsContainer";
import { LogoContainer } from "../Header/styles";
import { Container, FooterWrapper, Requisites } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <Requisites>УНП 691644569</Requisites>

        <LogoContainer to="/" />

        <ContactsContainer />
      </FooterWrapper>
    </Container>
  );
};

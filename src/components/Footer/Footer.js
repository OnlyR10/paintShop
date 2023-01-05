import React from "react";
import { ContactsContainer } from "../ContactsContainer/ContactsContainer";
import { LogoContainer } from "../Header/styles";
import { Container, Requisites, FooterWrapper } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <Requisites>УНП 100008858</Requisites>

        <LogoContainer to="/" />

        <ContactsContainer />
      </FooterWrapper>
    </Container>
  );
};

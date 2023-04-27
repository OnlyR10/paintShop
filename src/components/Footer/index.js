import React, { useContext } from "react";
import { Context } from "../../config/context";
import { ContactsContainer } from "../ContactsContainer";
import { LogoContainer } from "../Header/styles";
import { Container, FooterWrapper, Requisites } from "./styles";

export const Footer = () => {
  const { laptop, tablet } = useContext(Context);

  return (
    <>
      {tablet ? null : (
        <Container>
          <FooterWrapper>
            {laptop ? null : <Requisites>УНП 691644569</Requisites>}

            <LogoContainer to="/" />

            <ContactsContainer />
          </FooterWrapper>
        </Container>
      )}
    </>
  );
};

import React from "react";
import {
  Contact,
  ContactBox,
  ContactsColumn,
  Container,
  IconInstagram,
  IconOnliner,
  Label,
  PhoneContainer,
} from "./styles";

export const ContactsContainer = () => {
  return (
    <Container>
      <PhoneContainer>
        <Label>Для заказа:</Label>
        <ContactsColumn>
          <ContactBox href="tel:+375291070568">
            <Contact>+375 29 107 05 68</Contact>
          </ContactBox>
          <ContactBox href="tel:+375297587670">
            <Contact>+375 29 758 76 70</Contact>
          </ContactBox>
        </ContactsColumn>
      </PhoneContainer>

      <ContactsColumn>
        <ContactBox href="https://www.instagram.com/" target={"_blank"}>
          <IconInstagram />
          <Contact>Instagram</Contact>
        </ContactBox>
        <ContactBox href="https://www.onliner.by" target={"_blank"}>
          <IconOnliner />
          <Contact>Onliner</Contact>
        </ContactBox>
      </ContactsColumn>
    </Container>
  );
};

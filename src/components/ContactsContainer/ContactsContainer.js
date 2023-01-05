import React from "react";
import { Contact, ContactsColumn, Container, IconInstagram, IconOnliner, IconPhone } from "./styles";

export const ContactsContainer = () => {
  return (
    <Container>
      <ContactsColumn>
        <Contact href="tel:+375291234567">
          <IconPhone />
          +375 29 123 45 67
        </Contact>
        <Contact href="tel:+375299876543">
          <IconPhone />
          +375 29 987 65 43
        </Contact>
      </ContactsColumn>
      <ContactsColumn>
        <Contact href="https://www.instagram.com/" target={"_blank"}>
          <IconInstagram />
          instagram
        </Contact>
        <Contact href="https://www.onliner.by" target={"_blank"}>
          <IconOnliner />
          Onliner
        </Contact>
      </ContactsColumn>
    </Container>
  );
};

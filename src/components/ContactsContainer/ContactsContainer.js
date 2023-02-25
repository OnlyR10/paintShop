import React from "react";
import {
  Contact,
  ContactBox,
  ContactsColumn,
  Container,
  IconInstagram,
  IconOnliner,
  IconPhone,
} from "./styles";

export const ContactsContainer = () => {
  return (
    <Container>
      <ContactsColumn>
        <ContactBox href="tel:+375291234567">
          <IconPhone />
          <Contact>+375 29 123 45 67</Contact>
        </ContactBox>
        <ContactBox href="tel:+375299876543">
          <IconPhone />
          <Contact>+375 29 987 65 43</Contact>
        </ContactBox>
      </ContactsColumn>
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

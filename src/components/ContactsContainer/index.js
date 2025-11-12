import { useContext } from "react";
import { Context } from "../../config/context";
import {
  Contact,
  ContactBox,
  ContactsColumn,
  Container,
  IconInstagram,
  IconViber,
  Label,
  PhoneContainer,
} from "./styles";

export const ContactsContainer = () => {
  const { extra, desktop } = useContext(Context);

  return (
    <Container>
      <PhoneContainer>
        {extra ? null : <Label>Для заказа:</Label>}

        <ContactsColumn>
          <ContactBox href="tel:+375291070568">
            <Contact>+375 29 107 05 68</Contact>
          </ContactBox>
          <ContactBox href="tel:+375297587670">
            <Contact>+375 29 758 76 70</Contact>
          </ContactBox>
        </ContactsColumn>
      </PhoneContainer>

      {desktop ? null : (
        <ContactsColumn>
          <ContactBox
            href="https://www.instagram.com/festek_bel/"
            target={"_blank"}
          >
            <IconInstagram />
            <Contact>Результаты работ</Contact>
          </ContactBox>

          <ContactBox href="viber://chat?number=375291070568">
            <IconViber />
            <Contact>Viber</Contact>
          </ContactBox>
        </ContactsColumn>
      )}
    </Container>
  );
};

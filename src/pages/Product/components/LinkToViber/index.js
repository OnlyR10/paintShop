import { Container, Container2, ViberLink, ViberLink2 } from "./styles";
import {
  ViberButton2,
  ViberContainer2,
  ViberIcon2,
  ViberText2,
} from "./styles2";
import {
  ViberButton3,
  ViberContainer3,
  ViberIcon3,
  ViberText3,
} from "./styles3";
import { EnhancedContainer4, EnhancedViberLink4, ViberIcon4 } from "./styles4";

export const LinkToViber = () => {
  return (
    <Container>
      <ViberLink
        data-scope="viber-link"
        href="viber://chat?number=375291070568"
      >
        Связаться с нами в Viber
      </ViberLink>
    </Container>
  );
};

export const LinkToViber2 = () => {
  return (
    <Container2>
      <ViberLink2
        data-scope="viber-link"
        href="viber://chat?number=375291070568"
      >
        Связаться с нами в Viber
      </ViberLink2>
    </Container2>
  );
};

export const ViberContactButton2 = () => {
  return (
    <ViberContainer2>
      <ViberButton2
        href="viber://chat?number=375291070568"
        aria-label="Связаться с нами в Viber"
      >
        <ViberIcon2>📱</ViberIcon2>
        <ViberText2>Связаться с нами в Viber</ViberText2>
      </ViberButton2>
    </ViberContainer2>
  );
};

export const ViberContactButton3 = () => {
  return (
    <ViberContainer3>
      <ViberButton3
        href="viber://chat?number=375291070568"
        aria-label="Связаться с нами в Viber"
        className="viber-contact-button"
      >
        <ViberIcon3>📱</ViberIcon3>
        <ViberText3>Связаться в Viber</ViberText3>
      </ViberButton3>
    </ViberContainer3>
  );
};

export const LinkToViber4 = () => {
  return (
    <EnhancedContainer4>
      <EnhancedViberLink4
        data-scope="viber-link"
        href="viber://chat?number=375291070568"
        className="viber-contact-btn"
      >
        <ViberIcon4>💜</ViberIcon4>
        Связаться с нами в Viber
      </EnhancedViberLink4>
    </EnhancedContainer4>
  );
};

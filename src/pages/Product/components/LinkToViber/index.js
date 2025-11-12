import { Container, Container2, ViberLink, ViberLink2 } from "./styles";

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

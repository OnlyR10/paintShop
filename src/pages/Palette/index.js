import React from "react";
import { PaletteContainer } from "../../components/PaletteContainer";
import { Container, PaletteWrapper } from "./styles";

export const Palette = () => {
  return (
    <Container>
      <PaletteWrapper>
        <PaletteContainer />
      </PaletteWrapper>
    </Container>
  );
};

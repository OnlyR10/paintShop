import React from "react";
import PaletteContainer from "../../components/PaletteContainer";
import { Container, PaletteWrapper } from "./styles";

const Palette = () => {
  return (
    <Container>
      <PaletteWrapper>
        <PaletteContainer />
      </PaletteWrapper>
    </Container>
  );
};

export default Palette;

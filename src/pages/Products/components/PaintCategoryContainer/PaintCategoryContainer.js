import React from "react";
import { PaintTypeContainer } from "../../../../components/PaintTypeContainer/PaintTypeContainer";
import { PaintContainer, PaletteWrapper } from "./styles";

export const PaintCategoryContainer = ({ paintsOneCategory, index }) => {
  return (
    <PaintContainer index={index}>
      <PaletteWrapper>
        {paintsOneCategory.map((paint) => (
          <PaintTypeContainer key={paint.name} paint={paint} product="true" />
        ))}
      </PaletteWrapper>
    </PaintContainer>
  );
};

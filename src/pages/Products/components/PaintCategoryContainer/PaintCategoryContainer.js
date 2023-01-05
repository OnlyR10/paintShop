import React from "react";
import { PaintTypeContainer } from "../../../../components/PaintTypeContainer/PaintTypeContainer";
import { PaintContainer, PaletteWrapper } from "./styles";

export const PaintCategoryContainer = ({ paintsOneCategory }) => {
  const [firstElement] = paintsOneCategory;

  return (
    <PaintContainer backgroundcolor={firstElement.backgroundcolor}>
      <PaletteWrapper>
        {paintsOneCategory.map((paint) => (
          <PaintTypeContainer key={paint.name} paint={paint} />
        ))}
      </PaletteWrapper>
    </PaintContainer>
  );
};

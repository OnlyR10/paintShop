import React from "react";
import { PaintCategoryContainer } from "../components/PaintCategoryContainer/PaintCategoryContainer";
import { Container } from "./styles";
import { categoriesOfPaints, paints } from "../../../constants/PaintsConfig";

export const Products = () => {
  const categoriesNumber = Object.values(categoriesOfPaints);

  return (
    <Container>
      {categoriesNumber.map((paintName) => (
        <PaintCategoryContainer paintsOneCategory={paints[paintName]} key={paintName} />
      ))}
    </Container>
  );
};

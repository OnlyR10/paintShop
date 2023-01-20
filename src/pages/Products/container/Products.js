import React from "react";
import { categoriesOfPaints } from "../../../constants/categoryOfPaints";
import { paints } from "../../../constants/PaintsConfig";
import { PaintCategoryContainer } from "../components/PaintCategoryContainer/PaintCategoryContainer";
import { Container } from "./styles";

export const Products = () => {
  const categoriesNumber = Object.values(categoriesOfPaints);

  return (
    <Container>
      {categoriesNumber.map((paintName, index) => (
        <PaintCategoryContainer paintsOneCategory={paints[paintName]} key={paintName} index={index} />
      ))}
    </Container>
  );
};

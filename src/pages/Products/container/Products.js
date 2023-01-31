import React, { useEffect, useMemo, useState } from "react";
import { categoriesOfPaints, categoriesOfProducts } from "../../../constants/CategoryOfPaints";
import { paints } from "../../../constants/PaintsConfig";
import { PaintCard } from "../components/PaintCard/PaintCard";
import {
  CategoriesList,
  CategoriesLists,
  Container,
  FilterContainer,
  PaintsCards,
  ProductsWrapper,
  Title,
} from "./styles";

export const Products = () => {
  const [disputedPaints, setDisputedPaints] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");

  const ALL_PRODUCTS = "allProducts";

  const allPaints = useMemo(() => {
    const set = new Set(Object.values(paints).flat());
    return Array.from(set);
  }, []);

  const fullyCategoriesOfPaints = useMemo(() => [ALL_PRODUCTS, ...Object.values(categoriesOfPaints)], []);

  useEffect(() => {
    setDisputedPaints(allPaints);
    setCurrentTitle(fullyCategoriesOfPaints.at(0));
  }, []);

  useEffect(() => {
    if (currentTitle === ALL_PRODUCTS) {
      setDisputedPaints(allPaints);
    } else {
      const filteredPaints = allPaints.filter((paint) => paint.category.includes(currentTitle));
      setDisputedPaints(filteredPaints);
    }
  }, [currentTitle]);

  return (
    <Container>
      <ProductsWrapper>
        <Title>{categoriesOfProducts[currentTitle]}</Title>
        <FilterContainer>
          <CategoriesLists>
            {fullyCategoriesOfPaints.map((category) => (
              <CategoriesList key={category} onClick={() => setCurrentTitle(category)}>
                {categoriesOfProducts[category]}
              </CategoriesList>
            ))}
          </CategoriesLists>
          <PaintsCards>
            {disputedPaints.map((paint) => (
              <PaintCard key={paint.name} paint={paint}></PaintCard>
            ))}
          </PaintsCards>
        </FilterContainer>
      </ProductsWrapper>
    </Container>
  );
};

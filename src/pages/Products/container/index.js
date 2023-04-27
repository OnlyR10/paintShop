import React, { useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { categoriesOfProducts } from "../../../constants/categoryOfPaints";
import {
  CategoriesList,
  CategoriesLists,
  Container,
  FilterContainer,
  ProductsWrapper,
  Title,
  TitleContainer,
} from "./styles";

export const Products = () => {
  const { category } = useParams();

  const fullyCategoriesOfPaints = useMemo(() => {
    const entries = Object.entries(categoriesOfProducts);
    return entries.map(([key, value]) => {
      return { path: key, value };
    });
  }, []);

  return (
    <Container>
      <ProductsWrapper>
        <FilterContainer>
          <CategoriesLists>
            <TitleContainer>
              <Title>{categoriesOfProducts[category]}</Title>
            </TitleContainer>
            {fullyCategoriesOfPaints.map(({ path, value }, index) => {
              return (
                <CategoriesList key={`path-${index}`} to={path}>
                  {value}
                </CategoriesList>
              );
            })}
          </CategoriesLists>

          <Outlet />
        </FilterContainer>
      </ProductsWrapper>
    </Container>
  );
};

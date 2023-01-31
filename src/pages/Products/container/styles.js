import styled from "styled-components";
import { TEXT_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";

export const Container = styled.main`
  width: 100%;
  padding-top: 10vh;
  flex: 1 0 auto;
`;

export const ProductsWrapper = styled(Wrapper)`
  padding: 0 10rem 2rem;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 1rem 0 3rem;
  font-family: "Serif-Bold";
  font-size: 2.6rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  column-gap: 6rem;
`;

export const CategoriesLists = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 2rem;
  flex-shrink: 0;
`;

export const CategoriesList = styled.button`
  font-family: "Serif-SemiBold";
  font-size: 1.6rem;
  text-align: start;
  color: ${TEXT_PALETTE.main};
  border: 0;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const PaintsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

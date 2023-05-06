import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../../../Layout/styles";
import { PageContainer } from "../../../components/PageContainer";
import { BREAKPOINTS } from "../../../config/breakpoints";
import { TEXT_PALETTE } from "../../../config/palette";

export const Container = styled(PageContainer)`
  @media ${BREAKPOINTS.tablet} {
    padding-top: calc(8rem);
  }
`;

export const ProductsWrapper = styled(Wrapper)`
  padding: 0 10rem 2rem;

  @media ${BREAKPOINTS.tablet} {
    padding: 2rem 4rem 4rem;
  }
`;

export const TitleContainer = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: "Inter-Bold";
  font-size: 2.6rem;

  @media ${BREAKPOINTS.tablet} {
    text-align: center;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  column-gap: 6rem;

  @media ${BREAKPOINTS.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoriesLists = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 1rem;
  flex-shrink: 0;
  //////////
  width: 25rem;

  @media ${BREAKPOINTS.tablet} {
    align-items: center;
  }
`;

export const CategoriesList = styled(NavLink)`
  font-family: "Inter-SemiBold";
  font-size: 1.6rem;
  line-height: 2.2rem;
  text-align: start;
  color: ${TEXT_PALETTE.main};
  border: 0;
  border-bottom: 0.2rem solid transparent;
  background-color: transparent;
  padding: 0.5rem 0;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  :hover {
    color: ${TEXT_PALETTE.active};
    transition: color 0.3s;
  }
  :active {
    color: ${TEXT_PALETTE.active};
    border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
  }

  &&.active {
    border-bottom: 0.2rem solid ${TEXT_PALETTE.main};
    transition: all 0.3s;
    &&:hover {
      border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
    }
  }
`;

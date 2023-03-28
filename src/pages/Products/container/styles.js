import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINTS } from "../../../config/breakpoints";
import { TEXT_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";

export const Container = styled.main`
  width: 100%;
  padding-top: calc(10vh + 6rem);
  flex: 1 0 auto;
`;

export const ProductsWrapper = styled(Wrapper)`
  padding: 0 10rem 2rem;
`;

export const TitleContainer = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  /* padding: 0 0 1rem; */
  font-family: "Inter-Bold";
  font-size: 2.6rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  column-gap: 6rem;

  @media ${BREAKPOINTS.mobile} {
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

  @media ${BREAKPOINTS.mobile} {
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
    color: goldenrod;
    transition: color 0.3s;
  }
  :active {
    color: goldenrod;
    border-bottom: 0.2rem solid goldenrod;
  }

  &&.active {
    border-bottom: 0.2rem solid ${TEXT_PALETTE.main};
    transition: all 0.3s;
    &&:hover {
      border-bottom: 0.2rem solid goldenrod;
    }
  }
`;

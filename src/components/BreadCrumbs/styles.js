import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../config/palette";
import { Wrapper } from "../../layout/styles";

export const Container = styled.div`
  height: 6rem;
  background-color: ${MAIN_PALETTE.productFirstElementBackground};
  display: flex;
`;

export const BreadCrumbsWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 1rem 10rem;
  width: 100%;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const VerticalLine = styled.div`
  border: 1px solid black;
  height: 2rem;
`;

const breadCrumbStyle = css`
  font-family: "Serif-Regular";
  font-size: 1.5rem;
  color: ${TEXT_PALETTE.main};
  text-decoration: none;
  border-bottom: 0.2rem solid transparent;
  :hover {
    color: goldenrod;
    transition: color 0.3s;
  }
  :active {
    color: goldenrod;
    border-bottom: 0.2rem solid goldenrod;
  }
`;

export const BreadCrumb = styled.span`
  ${breadCrumbStyle}
`;

export const Link = styled(NavLink)`
  ${breadCrumbStyle}
`;

import styled from "styled-components";
import { BREAKPOINTS } from "../../config/breakpoints";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../config/palette";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  @media ${BREAKPOINTS.tablet} {
    padding-top: 2rem;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  font-family: "Inter-Bold";
  font-size: 3.6rem;
  text-align: center;
`;

export const InfoContainer = styled.div``;

export const Notice = styled.p`
  font-family: "Inter-Bold";
  font-size: 2.5rem;
  margin: 0;
`;

export const Info = styled.p`
  font-family: "Inter-Regular";
  font-size: 1.6rem;
`;

export const Link = styled.a`
  margin: 0;
  border-bottom: 0.2rem solid transparent;
  /* font-family: "Inter-Regular";
  font-size: 2rem;
  line-height: 3rem; */
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: goldenrod;
    transition: color 0.3s;
  }
  :active {
    color: goldenrod;
    border-bottom: 0.2rem solid goldenrod;
  }
`;

export const ColorPaletteList = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 0.1rem;
`;

export const ColorName = styled.span`
  font-family: "Inter-Regular";
  font-size: 1.4rem;
`;

export const ColorDescription = styled.span`
  font-family: "Inter-Light";
  font-size: 1rem;
`;

export const ColorBox = styled.div.attrs(({ backgroundcolor }) => ({
  style: {
    background: backgroundcolor,
  },
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  min-width: 10rem;
  /* max-width: 20rem; */
  min-height: 10rem;
  box-sizing: border-box;
  border: 0.1rem solid transparent;
  :hover {
    transition: scale 0.3s ease-in;
    scale: 2;
    border: 0.1rem solid ${MAIN_PALETTE.productFirstElementBackground};
    position: relative;
    z-index: 1;
  }
`;

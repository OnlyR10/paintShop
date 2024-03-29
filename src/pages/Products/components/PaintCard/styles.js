import { Link } from "react-router-dom";
import styled from "styled-components";
import { transfusionGradient } from "../../../../common/styles/transfusionGradient";
import { BREAKPOINTS } from "../../../../config/breakpoints";
import { TEXT_PALETTE } from "../../../../config/palette";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  flex: 1;
  max-width: 40rem;
  text-decoration: none;
  color: ${TEXT_PALETTE.main};

  @media ${BREAKPOINTS.tablet} {
    row-gap: 0.3rem;
  }

  :hover {
    && > div:first-child {
      transition: all 0.5s;
      scale: 1.1;
    }
    && > div:first-child::before {
      ${transfusionGradient}
    }
    && > div h2 {
      transition: color 0.3s;
      color: goldenrod;
    }
    && > div span {
      transition: color 0.3s;
      color: goldenrod;
    }
    && > div p {
      transition: color 0.3s;
      color: goldenrod;
    }
  }

  :active {
    && > div:first-child {
      scale: 1.1;
    }
    && > div h2 {
      color: goldenrod;
      border-bottom: 0.2rem solid goldenrod;
    }
    && > div span {
      color: goldenrod;
    }
    && > div p {
      color: goldenrod;
    }
  }
`;

export const PictureContainer = styled.div`
  width: 25rem;
  position: relative;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
`;

export const Header = styled.h2`
  margin: 0.5rem 0;
  font-family: "Inter-Bold";
  font-size: 1.8rem;
  border-bottom: 0.2rem solid transparent;
`;

export const Text = styled.span`
  display: inline-block;
  margin: 0 0 0.5rem 0;
  font-family: "Inter-Regular";
  font-size: 1.6rem;
`;

export const Price = styled.p`
  margin: 0;
  display: inline-block;
  font-family: "Inter-Bold";
  font-size: 2rem;
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Inter-Regular";
  font-size: 1.6rem;
`;

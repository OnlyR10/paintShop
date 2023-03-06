import { Link } from "react-router-dom";
import styled from "styled-components";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../../../config/palette";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  width: 45rem;
  height: 40rem;
  padding: 2rem 3rem;
  background-color: ${MAIN_PALETTE.productFirstElementBackground};
  text-decoration: none;
  color: ${TEXT_PALETTE.main};

  :hover {
    && > div:first-child {
      transition: all 0.5s;
      scale: 1.1;
    }
    && > div h2 {
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
      scale: 1.2;
    }
    && > div h2 {
      color: goldenrod;
      border-bottom: 0.2rem solid goldenrod;
    }
    && > div p {
      color: goldenrod;
    }
  }
`;

export const PictureContainer = styled.div`
  max-width: 25rem;
  min-width: 10rem;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.h2`
  width: fit-content;
  margin: 1rem 0 0.5rem;
  border-bottom: 0.2rem solid transparent;
  font-family: "Serif-Bold";
  font-size: 2.2rem;
  color: ${TEXT_PALETTE.main};
  text-align: center;
  text-decoration: none;
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Serif-Regular";
  font-size: 1.6rem;
  text-align: center;
`;

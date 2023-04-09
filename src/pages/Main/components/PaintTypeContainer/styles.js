import { Link } from "react-router-dom";
import styled from "styled-components";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../../../config/palette";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  row-gap: 2rem;
  width: 45rem;
  height: 40rem;
  padding: 2rem 3rem;
  background-color: ${MAIN_PALETTE.productFirstElementBackground};
  text-decoration: none;
  color: ${TEXT_PALETTE.main};

  :hover {
    && > div:first-child {
      transition: all 0.5s;
      scale: 1.05;
    }
    && > div h2 {
      transition: color 0.3s;
      color: ${TEXT_PALETTE.active};
    }
    && > div p {
      transition: color 0.3s;
      color: ${TEXT_PALETTE.active};
    }
  }

  :active {
    && > div:first-child {
      scale: 1.1;
    }
    && > div h2 {
      color: ${TEXT_PALETTE.active};
      border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
    }
    && > div p {
      color: ${TEXT_PALETTE.active};
    }
  }
`;

export const VideoContainer = styled.div``;

export const VideoScreensaver = styled.video`
  width: 40rem;
  height: 269px;
  object-fit: fill;
`;

export const VideoSource = styled.source``;

export const PictureContainer = styled.div`
  max-width: 40rem;
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
  font-family: "Inter-Bold";
  font-size: 2.2rem;
  color: ${TEXT_PALETTE.main};
  text-align: center;
  text-decoration: none;
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Inter-Regular";
  font-size: 1.6rem;
  text-align: center;
`;

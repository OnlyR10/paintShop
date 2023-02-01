import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;
  max-width: 20rem;
  flex: 1;

  :hover {
    && > div:first-child {
      transition: all 0.5s;
      scale: 1.2;
    }
    && > div h2 {
      transition: all 0.3s;
      color: goldenrod;
    }
  }
`;

export const PictureContainer = styled.div`
  max-width: 20rem;
  min-width: 10rem;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
`;

export const Header = styled.h2`
  margin: 0;
  padding-bottom: 0.5rem;
  font-family: "Serif-Bold";
  font-size: 1.8rem;
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Serif-Regular";
  font-size: 1.6rem;
  text-align: justify;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ product }) => product && "column"};
  column-gap: 3rem;
`;

export const PictureContainer = styled.div`
  max-width: 20rem;
  min-width: 10rem;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  text-align: ${({ textalign }) => textalign || "left"};
`;

export const Header = styled(Link)`
  font-family: "Serif-Bold";
  font-size: ${({ product }) => (product ? "2.5rem" : "3.6rem")};
`;

export const Description = styled.p`
  max-width: ${({ product }) => (product ? "40rem" : "70rem")};
  font-family: "Serif-Regular";
  font-size: 1.6rem;
  text-align: justify;
`;

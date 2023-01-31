import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
`;

export const PictureContainer = styled.div`
  max-width: 10rem;
  min-width: 5rem;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
`;

export const Header = styled.h2`
  margin: 0;
  font-family: "Serif-Bold";
  font-size: 1.4rem;
`;

export const Description = styled.p`
  font-family: "Serif-Regular";
  font-size: 1.2rem;
  text-align: justify;
  margin: 0;
`;

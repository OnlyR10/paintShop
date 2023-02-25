import { Link } from "react-router-dom";
import styled from "styled-components";
import { TEXT_PALETTE } from "../../config/palette";

export const Container = styled.div`
  display: flex;
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
  display: flex;
  flex-direction: column;
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "center")};
`;

export const Header = styled(Link)`
  border-bottom: 0.2rem solid transparent;
  font-family: "Serif-Bold";
  font-size: 3.6rem;
  color: ${TEXT_PALETTE.main};
  text-decoration: none;
  :hover {
    color: goldenrod;
    transition: color 0.3s;
  }
  :active {
    color: goldenrod;
    border-bottom: 0.2rem solid goldenrod;
  }
`;

export const Description = styled.p`
  max-width: 70rem;
  font-family: "Serif-Regular";
  font-size: 1.6rem;
  text-align: justify;
`;

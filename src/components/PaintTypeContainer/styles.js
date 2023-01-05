import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  /* max-width: 20%; */
`;

export const PictureContainer = styled.div`
  max-width: 200px;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  text-align: ${({ textalign }) => textalign || "left"};
`;

export const Header = styled.div`
  font-family: "Serif-Bold";
  font-size: 3.6rem;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  max-width: 700px;
  font-family: "Serif-Regular";
  font-size: 1.4rem;
  text-align: justify;
`;

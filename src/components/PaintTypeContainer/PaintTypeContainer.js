import React from "react";
import { ROOT } from "../../constants/Roots";
import { Container, Description, DescriptionContainer, Header, PaintPicture, PictureContainer } from "./styles";

export const PaintTypeContainer = ({ paint, index = 2, product }) => {
  const { category, path, header, documentation, Image } = paint;

  const honest = index % 2;

  const purpose = documentation.description.purpose;
  console.log("purpose", purpose);
  return (
    <>
      {honest ? (
        <Container>
          <DescriptionContainer textalign={"right"}>
            <Header to={`${ROOT}/${category.at(0)}/${path}`}>{header}</Header>
            <Description>{purpose}</Description>
          </DescriptionContainer>
          <PictureContainer>
            <PaintPicture src={Image} />
          </PictureContainer>
        </Container>
      ) : (
        <Container product={product}>
          <PictureContainer>
            <PaintPicture src={Image} />
          </PictureContainer>
          <DescriptionContainer textalign={product && "center"}>
            <Header to={`${ROOT}/${category.at(0)}/${path}`} product={product}>
              {header}
            </Header>
            <Description product={product}>{purpose}</Description>
          </DescriptionContainer>
        </Container>
      )}
    </>
  );
};

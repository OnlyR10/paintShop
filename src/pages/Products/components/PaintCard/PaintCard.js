import React from "react";
import { Container, Description, DescriptionContainer, Header, PaintPicture, PictureContainer } from "./styles";

export const PaintCard = ({ paint }) => {
  const { header, documentation, Image } = paint;
  const purpose = documentation.description.Назначение;

  return (
    <Container to={`/products/${paint.category.at(0)}/${paint.path}`}>
      <PictureContainer>
        <PaintPicture src={Image} />
      </PictureContainer>
      <DescriptionContainer>
        <Header>{header}</Header>
        <Description>{purpose}</Description>
      </DescriptionContainer>
    </Container>
  );
};

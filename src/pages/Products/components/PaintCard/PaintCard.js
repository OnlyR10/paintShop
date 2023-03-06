import React from "react";
import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  PaintPicture,
  PictureContainer,
} from "./styles";

export const PaintCard = ({ paint }) => {
  const {
    category,
    path,
    Image,
    productsPage: { title, text },
  } = paint;

  return (
    <Container to={`/products/${category.at(0)}/${path}`}>
      <PictureContainer>
        <PaintPicture src={Image} />
      </PictureContainer>
      <DescriptionContainer>
        <Header>{title}</Header>
        <Description>{text}</Description>
      </DescriptionContainer>
    </Container>
  );
};

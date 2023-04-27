import React from "react";
import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  PaintPicture,
  PictureContainer,
  Price,
  Text,
} from "./styles";

export const PaintCard = ({ paint }) => {
  const {
    category,
    path,
    images: { products },
    price,
    productsPage: { title, text },
  } = paint;

  return (
    <Container to={`/products/${category.at(0)}/${path}`}>
      <PictureContainer>
        <PaintPicture src={products} />
      </PictureContainer>

      <DescriptionContainer>
        <Header>{title}</Header>

        <Text>
          От <Price>{price}</Price> руб.
        </Text>

        <Description>{text}</Description>
      </DescriptionContainer>
    </Container>
  );
};

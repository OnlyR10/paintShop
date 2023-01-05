import React from "react";

import { Container, Description, DescriptionContainer, Header, PaintPicture, PictureContainer } from "./styles";

export const PaintTypeContainer = ({ paint, index = 2 }) => {
  const { header, description, Image } = paint;

  const honest = index % 2;

  return (
    <>
      {honest ? (
        <Container>
          <DescriptionContainer textalign={"right"}>
            <Header>{header}</Header>
            <Description>{description}</Description>
          </DescriptionContainer>
          <PictureContainer>
            <PaintPicture src={Image} />
          </PictureContainer>
        </Container>
      ) : (
        <Container>
          <PictureContainer>
            <PaintPicture src={Image} />
          </PictureContainer>
          <DescriptionContainer>
            <Header>{header}</Header>
            <Description>{description}</Description>
          </DescriptionContainer>
        </Container>
      )}
    </>
  );
};

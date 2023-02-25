import React from "react";
import { ROOT } from "../../constants/Roots";
import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  PaintPicture,
  PictureContainer,
} from "./styles";

export const PaintTypeContainer = ({ paint, index = 2 }) => {
  const { category, path, header, documentation, Image } = paint;

  const honest = index % 2;

  const purpose = documentation.description.purpose.value;

  return (
    <>
      {honest ? (
        <Container>
          <DescriptionContainer alignitems={"flex-end"}>
            <Header to={`${ROOT}/${category.at(0)}/${path}`}>{header}</Header>
            <Description>{purpose}</Description>
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
          <DescriptionContainer alignitems={"flex-start"}>
            <Header to={`${ROOT}/${category.at(0)}/${path}`}>{header}</Header>
            <Description>{purpose}</Description>
          </DescriptionContainer>
        </Container>
      )}
    </>
  );
};

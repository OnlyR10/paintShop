import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { paints } from "../../../constants/PaintsConfig";
import { ContentConfig } from "../constants/ContentConfig";
import {
  Application,
  Characteristics,
  ColorPalette,
  Container,
  ContentContainer,
  ControlPanel,
  Description,
  FileDownloadButton,
  InfoContainer,
  PaintDescription,
  PaintPicture,
  PaintTitle,
  PictureContainer,
  ProductWrapper,
  ShortDescription,
  SliderContainer,
  Text,
  UploadIcon,
} from "./styles";

export const Product = () => {
  const { category, name } = useParams();
  const [activeContent, setActiveContent] = useState("Description");

  const Content = ContentConfig[activeContent];
  const currentPaint = paints[category].find((paint) => paint.path === name);
  const { Image, header } = currentPaint;
  const purpose = currentPaint.documentation.description.purpose.value;

  return (
    <Container>
      <SliderContainer>
        <ProductWrapper>
          <PictureContainer>
            <PaintPicture src={Image} />
          </PictureContainer>
        </ProductWrapper>
      </SliderContainer>

      <ContentContainer>
        <ProductWrapper>
          <ShortDescription>
            <PaintTitle>{header}</PaintTitle>
            <PaintDescription>{purpose}</PaintDescription>
          </ShortDescription>

          <InfoContainer>
            <ControlPanel>
              <Description onClick={() => setActiveContent("Description")}>Описание</Description>

              <Application onClick={() => setActiveContent("Application")}>Нанесение</Application>

              <Characteristics onClick={() => setActiveContent("Characteristics")}>Характеристики</Characteristics>

              <ColorPalette onClick={() => setActiveContent("PaletteContainer")}>Цветовая палитра</ColorPalette>

              <FileDownloadButton href={`/files/${name.slice(7)}.pdf`} target="_blank">
                <UploadIcon />
                <Text>Тех. документ PDF</Text>
              </FileDownloadButton>
            </ControlPanel>

            <Content paint={currentPaint} />
          </InfoContainer>
        </ProductWrapper>
      </ContentContainer>
    </Container>
  );
};

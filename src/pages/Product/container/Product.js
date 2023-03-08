import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { paints } from "../../../constants/PaintsConfig";
import { ContentConfig } from "../constants/ContentConfig";
import {
  Container,
  ContentContainer,
  ControlPanel,
  FileDownloadButton,
  InfoContainer,
  LinkButton,
  PaintDescription,
  PaintPicture,
  PaintTitle,
  PictureContainer,
  ProductWrapper,
  ShortDescription,
  SliderContainer,
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
              <LinkButton onClick={() => setActiveContent("Description")}>
                Описание
              </LinkButton>

              <LinkButton onClick={() => setActiveContent("Application")}>
                Нанесение
              </LinkButton>

              <LinkButton onClick={() => setActiveContent("Characteristics")}>
                Характеристики
              </LinkButton>

              <LinkButton onClick={() => setActiveContent("Delivery")}>
                Условия доставки
              </LinkButton>

              <LinkButton onClick={() => setActiveContent("PaletteContainer")}>
                Цветовая палитра
              </LinkButton>

              {/* <FileDownloadButton href={`/files/${name.slice(7)}.pdf`} target="_blank">
                <UploadIcon />
                <Text>Тех. документ PDF</Text>
              </FileDownloadButton> */}

              <FileDownloadButton
                href={`/files/${name.slice(7)}.pdf`}
                target="_blank"
              >
                Тех. документ PDF
              </FileDownloadButton>
            </ControlPanel>

            <Content paint={currentPaint} />
          </InfoContainer>
        </ProductWrapper>
      </ContentContainer>
    </Container>
  );
};

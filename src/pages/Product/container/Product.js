import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { paints } from "../../../constants/PaintsConfig";
import { Slider } from "../components/Slider/Slider";
import { ContentConfig } from "../constants/ContentConfig";
import {
  Container,
  ContentContainer,
  ControlPanel,
  FileDownloadButton,
  InfoContainer,
  LinkButton,
  PaintDescription,
  PaintTitle,
  ProductWrapper,
  ShortDescription,
} from "./styles";

export const Product = () => {
  const { category, name } = useParams();
  const [activeContent, setActiveContent] = useState("Description");
  const [render, setRender] = useState(false);

  const Content = ContentConfig[activeContent];
  const currentPaint = paints[category].find((paint) => paint.path === name);
  const {
    images: { product },
    header,
  } = currentPaint;
  const purpose = currentPaint.documentation.description.purpose.value;

  useEffect(() => {
    window.scrollTo(0, 0);
    setRender(true);
  }, []);

  return (
    <Container render={render}>
      <Slider images={product} />

      <ContentContainer>
        <ProductWrapper>
          <ShortDescription>
            <PaintTitle>{header}</PaintTitle>
            <PaintDescription>{purpose}</PaintDescription>
          </ShortDescription>

          <InfoContainer>
            <ControlPanel>
              <LinkButton
                className={activeContent === "Description" ? "active" : null}
                onClick={() => setActiveContent("Description")}
              >
                Описание
              </LinkButton>

              <LinkButton
                className={activeContent === "Application" ? "active" : null}
                onClick={() => setActiveContent("Application")}
              >
                Нанесение
              </LinkButton>

              <LinkButton
                className={
                  activeContent === "Characteristics" ? "active" : null
                }
                onClick={() => setActiveContent("Characteristics")}
              >
                Характеристики
              </LinkButton>

              <LinkButton
                className={
                  activeContent === "PaletteContainer" ? "active" : null
                }
                onClick={() => setActiveContent("PaletteContainer")}
              >
                Цветовая палитра
              </LinkButton>

              <LinkButton
                className={activeContent === "Delivery" ? "active" : null}
                onClick={() => setActiveContent("Delivery")}
              >
                Условия доставки и самовывоза
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

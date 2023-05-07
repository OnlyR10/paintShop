import React, { createRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { paints } from "../../../constants/paintsConfig";
import { useResize } from "../../../hooks/useResize";
import { Slider } from "../components/Slider";
import { ContentConfig } from "../constants/contentConfig";
import {
  Container,
  ControlPanel,
  FileDownloadButton,
  InfoContainer,
  LinkButton,
  PaintPrice,
  PaintPriceText,
  PaintTitle,
  ProductWrapper,
  ShortDescription,
} from "./styles";

export const Product = () => {
  const contentRef = createRef(null);
  const resize = useResize();

  const { category, name } = useParams();
  const [activeContent, setActiveContent] = useState("Description");
  const [render, setRender] = useState(false);

  const Content = ContentConfig[activeContent];
  const currentPaint = paints[category].find((paint) => paint.path === name);
  const {
    images: { product },
    header,
    link,
    purchase,
  } = currentPaint;

  const showActiveContent = (signContent) => {
    setActiveContent(signContent);

    if (resize.tablet) {
      const HEADER_PADDING = 160;
      const contentPosition = contentRef?.current.getBoundingClientRect();

      window.scrollTo({
        top: contentPosition.top + window.pageYOffset - HEADER_PADDING,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setRender(true);
  }, []);

  return (
    <Container render={render}>
      <Slider images={product} />

      <ProductWrapper>
        <ShortDescription>
          <PaintTitle>{header}</PaintTitle>

          {purchase.map(({ price, amount }) => {
            return (
              <PaintPriceText key={`product_price_${price}`}>
                От <PaintPrice>{price}</PaintPrice> руб. за ведро {amount}.
              </PaintPriceText>
            );
          })}
        </ShortDescription>

        <InfoContainer>
          <ControlPanel>
            <LinkButton
              className={activeContent === "Description" ? "active" : null}
              onClick={() => showActiveContent("Description")}
            >
              Описание
            </LinkButton>

            <LinkButton
              className={activeContent === "Application" ? "active" : null}
              onClick={() => showActiveContent("Application")}
            >
              Нанесение
            </LinkButton>

            <LinkButton
              className={activeContent === "Characteristics" ? "active" : null}
              onClick={() => showActiveContent("Characteristics")}
            >
              Характеристики
            </LinkButton>

            <LinkButton
              className={activeContent === "PaletteContainer" ? "active" : null}
              onClick={() => showActiveContent("PaletteContainer")}
            >
              Цветовая палитра
            </LinkButton>

            <LinkButton
              className={activeContent === "Delivery" ? "active" : null}
              onClick={() => showActiveContent("Delivery")}
            >
              Условия доставки и самовывоза
            </LinkButton>

            <FileDownloadButton href={link} target="_blank">
              Тех. документ PDF
            </FileDownloadButton>
          </ControlPanel>

          <Content ref={contentRef} paint={currentPaint} product />
        </InfoContainer>
      </ProductWrapper>
    </Container>
  );
};

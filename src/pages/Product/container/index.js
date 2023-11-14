import React, {
  Suspense,
  createRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import description from "../../../assets/icons/description.svg";
import help from "../../../assets/icons/help.svg";
import palette from "../../../assets/icons/palette.svg";
import { Context } from "../../../config/context";
import { paints } from "../../../constants/paintsConfig";
import { FallbackContainer } from "../../../layout/styles";
import { Slider } from "../components/Slider";
import { ContentConfig } from "../constants/contentConfig";
import {
  Container,
  ControlPanel,
  FileDownloadButton,
  InfoContainer,
  LinkButton,
  LinkContainer,
  PaintPicture,
  PaintPrice,
  PaintPriceText,
  PaintTitle,
  PictureContainer,
  ProductWrapper,
  ShortDescription,
} from "./styles";

const Product = () => {
  const { tablet, smartphone } = useContext(Context);
  const { category, name } = useParams();
  const contentRef = createRef(null);

  const [activeContent, setActiveContent] = useState("Description");
  const [render, setRender] = useState(false);

  const Content = ContentConfig[activeContent];
  const currentPaint = paints[category].find((paint) => paint.path === name);
  const {
    images: { product, products },
    header,
    link,
    purchase,
  } = currentPaint;

  const showActiveContent = (signContent) => {
    setActiveContent(signContent);

    if (tablet) {
      const HEADER_PADDING = 100;
      const contentPosition = contentRef?.current.getBoundingClientRect();

      window.scrollTo({
        top: contentPosition.top + window.pageYOffset - HEADER_PADDING,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setRender(true);
  }, []);

  return (
    <Container render={render}>
      {tablet ? (
        <PictureContainer>
          <PaintPicture src={products} />
        </PictureContainer>
      ) : (
        <Slider images={product} />
      )}

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
            {smartphone ? (
              <LinkContainer
                className={activeContent === "Description" ? "active" : null}
                onClick={() => showActiveContent("Description")}
              >
                <PaintPicture src={description} />
              </LinkContainer>
            ) : (
            <LinkButton
              className={activeContent === "Description" ? "active" : null}
              onClick={() => showActiveContent("Description")}
                image={description}
            >
              Описание
            </LinkButton>
            )}

            {smartphone ? null : (
            <LinkButton
              className={activeContent === "Application" ? "active" : null}
              onClick={() => showActiveContent("Application")}
            >
              Нанесение
            </LinkButton>
            )}

            {smartphone ? null : (
            <LinkButton
                className={
                  activeContent === "Characteristics" ? "active" : null
                }
              onClick={() => showActiveContent("Characteristics")}
            >
              Характеристики
            </LinkButton>
            )}

            {smartphone ? (
              <LinkContainer
                className={
                  activeContent === "PaletteContainer" ? "active" : null
                }
                onClick={() => showActiveContent("PaletteContainer")}
              >
                <PaintPicture src={palette} />
              </LinkContainer>
            ) : (
            <LinkButton
                className={
                  activeContent === "PaletteContainer" ? "active" : null
                }
              onClick={() => showActiveContent("PaletteContainer")}
            >
              Цветовая палитра
            </LinkButton>
            )}

            {smartphone ? (
              <LinkContainer
                className={activeContent === "Delivery" ? "active" : null}
                onClick={() => showActiveContent("Delivery")}
              >
                <PaintPicture src={help} />
              </LinkContainer>
            ) : (
            <LinkButton
              className={activeContent === "Delivery" ? "active" : null}
              onClick={() => showActiveContent("Delivery")}
            >
              Условия доставки и самовывоза
            </LinkButton>
            )}

            {smartphone ? null : (
            <FileDownloadButton href={link} target="_blank">
              Тех. документ PDF
            </FileDownloadButton>
            )}
          </ControlPanel>

          <Suspense
            fallback={<FallbackContainer>Loading...</FallbackContainer>}
          >
            <Content ref={contentRef} paint={currentPaint} product />
          </Suspense>
        </InfoContainer>
      </ProductWrapper>
    </Container>
  );
};

export default Product;

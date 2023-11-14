import React, {
  Suspense,
  createRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
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
  PaintPicture,
  PaintPrice,
  PaintPriceText,
  PaintTitle,
  PictureContainer,
  ProductWrapper,
  ShortDescription,
} from "./styles";

const Product = () => {
  const { tablet } = useContext(Context);
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

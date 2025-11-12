import { Suspense, createRef, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import description from "../../../assets/icons/description.svg";
import help from "../../../assets/icons/help.svg";
import palette from "../../../assets/icons/palette.svg";
import { Context } from "../../../config/context";
import { paints } from "../../../constants/paintsConfig";
import { LinkToViber, LinkToViber2 } from "../components/LinkToViber";
import { Slider } from "../components/Slider";
import { contentConfig } from "../constants/contentConfig";
import {
  BoldText,
  Container,
  ControlPanel,
  FallbackContent,
  FileDownloadButton,
  InfoContainer,
  LinkButton,
  LinkContainer,
  ManufacturerText,
  PaintPicture,
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

  const Content = contentConfig[activeContent];
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
      <ShortDescription>
        <PaintTitle>{header}</PaintTitle>
      </ShortDescription>

      <ProductWrapper>
        <InfoContainer>
          <ManufacturerText>
            <BoldText>Изготовитель: </BoldText>ООО "Экзальт", ул. Центральная,
            д. 49, Дзержинский район, Боровской с/с, д. Бакиново 222720, Минская
            обл., Республика Беларусь
          </ManufacturerText>

          <ManufacturerText style={{ paddingTop: "1.5rem" }}>
            <BoldText>Страна производства: </BoldText>Беларусь
          </ManufacturerText>
        </InfoContainer>
      </ProductWrapper>

      {tablet ? (
        <PictureContainer>
          <PaintPicture src={products} />
        </PictureContainer>
      ) : (
        <Slider images={product} />
      )}

      <ProductWrapper>
        {purchase.map(({ price, amount }) => {
          return (
            <PaintPriceText key={`product_price_${price}`}>
              От <BoldText>{price}</BoldText> руб. за ведро {amount}.
            </PaintPriceText>
          );
        })}

        <LinkToViber />

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

          <Suspense fallback={<FallbackContent>Загрузка...</FallbackContent>}>
            <Content ref={contentRef} paint={currentPaint} product />
          </Suspense>

          <LinkToViber2 />
        </InfoContainer>
      </ProductWrapper>
    </Container>
  );
};

export default Product;

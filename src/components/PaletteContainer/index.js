import React from "react";
import { colorPalette } from "../../constants/colorPalette";
import {
  ColorBox,
  ColorDescription,
  ColorName,
  ColorPaletteList,
  Container,
  Header,
  Info,
  InfoContainer,
  Link,
  Notice,
  Title,
} from "./styles";

export const PaletteContainer = ({ product }) => {
  return (
    <Container product={product}>
      <Header>
        <Title>Палитра цветов</Title>
        <InfoContainer>
          <Notice>Обращаем ваше внимание!</Notice>
          <Info>
            Цвет на мониторе Вашего устройства отличается от реального цвета
            колерованного продукта, поэтому для подбора цвета мы рекомендуем
            обращаться к менеджеру для выбора цвета по вееру.
          </Info>

          <Info>
            После выбора цвета, Вы сможете заказать материала с доставкой на Ваш
            объект.
          </Info>

          <Info>
            Цена колерованного продукта отличается от цены базового продукта и
            будет рассчитана нами при вашем обращении.
          </Info>

          <Info>
            Так же для визуализации цвета можете воспользоваться{" "}
            <Link>Spectrum Express</Link>
          </Info>
        </InfoContainer>
      </Header>
      <ColorPaletteList>
        {colorPalette.map(
          ({ background, colorName, colorDescription }, index) => (
            <ColorBox
              key={`${background}-${index}`}
              backgroundcolor={background}
            >
              <ColorName>{colorName}</ColorName>
              <ColorDescription>{colorDescription}</ColorDescription>
            </ColorBox>
          )
        )}
      </ColorPaletteList>
    </Container>
  );
};
import React from "react";
import {
  ColorBox,
  ColorDescription,
  ColorName,
  ColorPaletteList,
  Container,
  Header,
  Info,
  InfoContainer,
  Notice,
  Title,
} from "./styles";
import { colorPalette } from "../../constants/ColorPalette";

export const PaletteContainer = ({ product }) => {
  return (
    <Container>
      <Header>
        {!product && <Title>Палитра цветов</Title>}
        <InfoContainer>
          <Notice>Обращаем ваше внимание!</Notice>
          <Info>
            Окончательный выбор цвета, текстуры, фактуры необходимо производить в салоне, так как способность передавать
            цвет без искажений у всех дисплеев разная. Цвета в палитре располагаются в порядке сочетания.
          </Info>
        </InfoContainer>
      </Header>
      <ColorPaletteList>
        {colorPalette.map(({ background, colorName, colorDescription }, index) => (
          <ColorBox key={`${background}-${index}`} backgroundcolor={background}>
            <ColorName>{colorName}</ColorName>
            <ColorDescription>{colorDescription}</ColorDescription>
          </ColorBox>
        ))}
      </ColorPaletteList>
    </Container>
  );
};

import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { PaintTypeContainer } from "../components/PaintTypeContainer/PaintTypeContainer";
import { VideoContainer } from "../components/VideoContainer/VideoContainer";
import { sectionConfig } from "../constants/sectionConfig";
import {
  Container,
  ContentContainer,
  Introduction,
  IntroductionWrapper,
  Logotype,
  PaintWrapper,
  PictureContainer,
  TextDefinition,
} from "./styles";

export const Main = () => {
  const [sachshell, setSachshell] = useState(true);

  return (
    <Container>
      {/* <Sachshell>
           <TextContainer>
             <Veil />
             <Text>Краски</Text>
           </TextContainer>
         </Sachshell>

         <Sachshell onAnimationEnd={() => setSachshell(false)}>
           <Text>Краски</Text>
         </Sachshell> */}

      <ContentContainer>
        <VideoContainer />

        <IntroductionWrapper>
          <PictureContainer>
            <Logotype src={Logo} />
          </PictureContainer>

          <Introduction>
            <TextDefinition>Экзальт</TextDefinition> - это компания по
            производству акриловых красок и грунтовок. Наша линия представляет
            собой небольшую партию красок, доступных в тщательно подобранной
            палитре цветов, каждый из которых обладает глубиной и текстурой
            ручной работы. Мы инвестировали в лучшие ингредиенты и практиковали
            традиционные европейские методы для создания конечного продукта. Мы
            гарантируем высокое качество нашей продукции, произведенной по
            европейским стандартам
          </Introduction>
        </IntroductionWrapper>

        <PaintWrapper>
          {sectionConfig.map((section) => {
            return (
              <PaintTypeContainer key={section.header} section={section} />
            );
          })}
        </PaintWrapper>
      </ContentContainer>
    </Container>
  );
};

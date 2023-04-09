import React, { useContext } from "react";
import LogoImage from "../../../assets/images/logo.png";
import PosterImage from "../../../assets/images/poster.jpg";
import { Context } from "../../../config/context";
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
  Poster,
  TextDefinition,
} from "./styles";

export const Main = () => {
  const { laptop } = useContext(Context);

  // const [sachshell, setSachshell] = useState(true);

  return (
    <Container mainPage>
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
        {laptop ? <Poster src={PosterImage} /> : <VideoContainer />}

        <IntroductionWrapper>
          <Logotype src={LogoImage} />

          <Introduction>
            <TextDefinition>Экзальт</TextDefinition> - это компания по
            производству акриловых красок и грунтовок. Наша линия представляет
            собой небольшую партию красок, доступных в тщательно подобранной
            палитре цветов, каждый из которых обладает глубиной и текстурой
            ручной работы. Мы инвестировали в лучшие ингредиенты и практиковали
            традиционные европейские методы для создания конечного продукта. Мы
            гарантируем высокое качество нашей продукции, произведенной по
            европейским стандартам.
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

import React, { useState } from "react";
import { PaintTypeContainer } from "../components/PaintTypeContainer/PaintTypeContainer";
import { VideoContainer } from "../components/VideoContainer/VideoContainer";
import { sectionConfig } from "../constants/sectionConfig";
import {
  Container,
  ContentContainer,
  PaintWrapper,
  Sachshell,
  Text,
} from "./styles";

export const Main = () => {
  const [sachshell, setSachshell] = useState(true);

  return (
    <Container>
      {/* {sachshell ? ( */}
      {false ? (
        // <Sachshell>
        //   <TextContainer>
        //     <Veil />
        //     <Text>Краски</Text>
        //   </TextContainer>
        // </Sachshell>

        <Sachshell onAnimationEnd={() => setSachshell(false)}>
          <Text>Краски</Text>
        </Sachshell>
      ) : (
        <ContentContainer>
          <VideoContainer />

          <PaintWrapper>
            {sectionConfig.map((section) => {
              return (
                <PaintTypeContainer key={section.header} section={section} />
              );
            })}
          </PaintWrapper>
        </ContentContainer>
      )}
    </Container>
  );
};

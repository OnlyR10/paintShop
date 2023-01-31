import React from "react";
import { PaintTypeContainer } from "../../../components/PaintTypeContainer/PaintTypeContainer";
import { paintsForMainPage } from "../../../constants/PaintsConfig";
import { VideoContainer } from "../components/VideoContainer/VideoContainer";
import { Container, PaintContainer, PaintWrapper } from "./styles";

export const Main = () => {
  return (
    <Container>
      <VideoContainer />

      {paintsForMainPage.map((paint, index) => {
        return (
          <PaintContainer key={paint.name} index={index}>
            <PaintWrapper>
              <PaintTypeContainer paint={paint} index={index} />
            </PaintWrapper>
          </PaintContainer>
        );
      })}
    </Container>
  );
};

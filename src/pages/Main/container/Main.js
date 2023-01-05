import React from "react";
import { Container, PaintContainer, PaintWrapper } from "./styles";
import { PaintTypeContainer } from "../../../components/PaintTypeContainer/PaintTypeContainer";
import { paintsForMainPage } from "../../../constants/PaintsConfig";
import { VideoContainer } from "../components/VideoContainer/VideoContainer";

export const Main = () => {
  return (
    <Container>
      <VideoContainer />

      {paintsForMainPage.map((paint, index) => {
        return (
          <PaintContainer backgroundcolor={paint.backgroundcolor} key={paint.name}>
            <PaintWrapper>
              <PaintTypeContainer paint={paint} index={index} />
            </PaintWrapper>
          </PaintContainer>
        );
      })}
    </Container>
  );
};

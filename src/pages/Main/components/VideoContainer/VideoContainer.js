import React from "react";
import videoM from "../../../../assets/video/Inscryption.mp4";
import videoW from "../../../../assets/video/Inscryption.webm";
import poster from "../../../../assets/images/hands.jpg";
import { Container, MainWrapper, VideoScreensaver, VideoSource } from "./style";

export const VideoContainer = () => {
  return (
    <Container>
      <MainWrapper>
        <VideoScreensaver autoPlay muted loop poster={poster}>
          <VideoSource src={videoW} type="video/webm" />
          <VideoSource src={videoM} type="video/mp4" />
        </VideoScreensaver>
      </MainWrapper>
    </Container>
  );
};

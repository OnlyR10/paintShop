import React from "react";
import poster from "../../../../assets/images/poster.jpg";
import videoM from "../../../../assets/video/Ecoline.mp4";
import videoW from "../../../../assets/video/Ecoline.webm";
import { Container, VideoScreensaver, VideoSource } from "./styles";

export const VideoContainer = () => {
  return (
    <Container>
      <VideoScreensaver autoPlay muted loop poster={poster}>
        <VideoSource src={videoW} type="video/webm" />
        <VideoSource src={videoM} type="video/mp4" />
      </VideoScreensaver>
    </Container>
  );
};

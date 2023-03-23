import React from "react";
import { ROOT } from "../../../../constants/Roots";
import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  PaintPicture,
  PictureContainer,
  VideoContainer,
  VideoScreensaver,
  VideoSource,
} from "./styles";

export const PaintTypeContainer = ({ section }) => {
  const { header, image, videos, category, purpose } = section;

  return (
    <Container to={`${ROOT}/${category}`}>
      {videos ? (
        <VideoContainer>
          <VideoScreensaver autoPlay muted loop /* poster={poster} */>
            <VideoSource src={videos.webm} type="video/webm" />
            <VideoSource src={videos.mp4} type="video/mp4" />
          </VideoScreensaver>
        </VideoContainer>
      ) : (
        <PictureContainer>
          <PaintPicture src={image} />
        </PictureContainer>
      )}

      <DescriptionContainer>
        <Header>{header}</Header>
        <Description>{purpose}</Description>
      </DescriptionContainer>
    </Container>
  );
};

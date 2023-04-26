// import poster from "../../../../assets/images/poster.jpg";
// import videoM from "../../../../assets/video/Ecoline.mp4";
// import videoW from "../../../../assets/video/Ecoline.webm";
// import { VideoScreensaver, VideoSource } from "./styles";
import { Container, Frame } from "./styles";

export const VideoContainer = () => {
  return (
    <Container>
      {/* <VideoScreensaver autoPlay muted loop poster={poster}>
        <VideoSource src={videoW} type="video/webm" />
        <VideoSource src={videoM} type="video/mp4" />
      </VideoScreensaver> */}

      <Frame
        src="https://www.youtube.com/embed/Z1rSastKnNQ?autoplay=1&controls=0&loop=1&playlist=Z1rSastKnNQ"
        title="Festek"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Container>
  );
};

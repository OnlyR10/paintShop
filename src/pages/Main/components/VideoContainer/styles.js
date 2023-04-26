import styled from "styled-components";

export const Container = styled.div`
  height: 72rem;
  overflow: hidden;
  position: relative;
`;

export const VideoScreensaver = styled.video`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const VideoSource = styled.source``;

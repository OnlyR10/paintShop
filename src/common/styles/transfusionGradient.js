import { css, keyframes } from "styled-components";

const gradient = keyframes`
0% {
  background-position: 100% 100%;
  /* opacity: 0; */
}
50% {
  opacity: 1;
}
100% {
   background-position: 0 0;
   /* opacity: 0; */
}
`;

export const transfusionGradient = css`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  background: rgb(255, 255, 255, 0.7);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.0032387955182072714) 100%
  );
  background-size: 200% 200%;
  background-position: 100% 100%;
  animation-name: ${gradient};
  animation-duration: 1s;
  animation-timing-function: ease;
  /* animation-iteration-count: 2; */
`;

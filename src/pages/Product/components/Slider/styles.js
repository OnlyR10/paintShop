import styled, { css, keyframes } from "styled-components";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../../assets/icons/RightArrow.svg";
import { BREAKPOINTS } from "../../../../config/breakpoints";

const transition = {
  fullScreen: 100,
  desktop: 75,
  laptop: 50,
  tablet: 40,
  smartphone: 25,
};

const MoveLeft = (device = "fullScreen") => {
  return keyframes`
  0%{
    transform: translate(0);
  }
  100% {
    transform: translate(${transition[device]}rem);
  }`;
};

const MoveRight = (device = "fullScreen") => {
  return keyframes`
  0%{
    transform: translate(0);
  }
  100% {
    transform: translate(-${transition[device]}rem);
  }`;
};

const sliderAnimation = (device) => {
  return css`
    &.left-entered {
      animation: ${MoveLeft(device)} 0.8s forwards;
    }
    &.right-entered {
      animation: ${MoveRight(device)} 0.8s forwards;
    }
  `;
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-areas: "arrowLeft sliderContainer arrowRight";
  align-items: center;
  column-gap: 2rem;
  max-width: max-content;
  margin: 0 auto;

  @media ${BREAKPOINTS.smartphone} {
    grid-template-columns: repeat(2, max-content);
    grid-template-areas:
      "sliderContainer sliderContainer"
      "arrowLeft arrowRight";
    column-gap: 5rem;
    row-gap: 1rem;
  }
`;

const Slide = css`
  width: 100rem;
  height: 65.5rem;

  @media ${BREAKPOINTS.desktop} {
    width: 75rem;
    height: 48.375rem;
  }

  @media ${BREAKPOINTS.laptop} {
    width: 50rem;
    height: 32.25rem;
  }

  @media ${BREAKPOINTS.tablet} {
    width: 40rem;
    height: 26.2rem;
  }

  @media ${BREAKPOINTS.smartphone} {
    width: 25rem;
    height: 16.375rem;
  }
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  grid-area: sliderContainer;
  display: flex;
  ${Slide}
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  left: -100rem;
  ${sliderAnimation()}

  @media ${BREAKPOINTS.desktop} {
    left: -75rem;
    ${sliderAnimation("desktop")}
  }

  @media ${BREAKPOINTS.laptop} {
    left: -50rem;
    ${sliderAnimation("laptop")}
  }

  @media ${BREAKPOINTS.tablet} {
    left: -40rem;
    ${sliderAnimation("tablet")}
  }

  @media ${BREAKPOINTS.smartphone} {
    left: -25rem;
    ${sliderAnimation("smartphone")}
  }
`;

export const PictureContainer = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${Slide}
`;

export const ArrowBox = styled.div`
  width: 3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const ArrowLeft = styled(ArrowBox)`
  grid-area: arrowLeft;
  background-image: url(${LeftArrow});

  @media ${BREAKPOINTS.smartphone} {
    justify-self: end;
  }
`;

export const ArrowRight = styled(ArrowBox)`
  grid-area: arrowRight;
  background-image: url(${RightArrow});

  @media ${BREAKPOINTS.smartphone} {
    justify-self: start;
  }
`;

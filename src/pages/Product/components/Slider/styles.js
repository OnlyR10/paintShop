import styled, { css, keyframes } from "styled-components";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../../assets/icons/RightArrow.svg";
import { BREAKPOINTS } from "../../../../config/breakpoints";

const transition = {
  fullScreen: 100,
  desktop: 75,
  tablet: 50,
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
  max-width: 112rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin: 0 auto;

  @media ${BREAKPOINTS.tablet} {
    column-gap: 1rem;
  }
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

  @media ${BREAKPOINTS.tablet} {
    left: -50rem;
    ${sliderAnimation("tablet")}
  }
`;

export const SliderWrapper = styled.div`
  // Чтобы картинки были одинаковой высоты
  width: 100rem;
  height: 65.5rem;
  overflow: hidden;
  display: flex;

  @media ${BREAKPOINTS.desktop} {
    width: 75rem;
    height: 48.375rem;
  }

  @media ${BREAKPOINTS.tablet} {
    width: 50rem;
    height: 32.25rem;
  }
`;

export const PictureContainer = styled.div`
  width: 100rem;
  height: 65.5rem;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${BREAKPOINTS.desktop} {
    width: 75rem;
    height: 48.375rem;
  }

  @media ${BREAKPOINTS.tablet} {
    width: 50rem;
    height: 32.25rem;
  }
`;

export const ArrowBox = styled.div`
  width: 3rem;
  height: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ArrowLeft = styled(ArrowBox)`
  background-image: url(${LeftArrow});
`;

export const ArrowRight = styled(ArrowBox)`
  background-image: url(${RightArrow});
`;

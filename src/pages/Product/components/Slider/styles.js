import styled, { keyframes } from "styled-components";
import { MAIN_PALETTE } from "../../../../config/palette";
// import { Wrapper } from "../../../../layout/styles";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../../assets/icons/RightArrow.svg";

const MoveLeft = keyframes`
0%{
  transform: translate(0);
}
100% {
  transform: translate(100rem);
}
`;

const MoveRight = keyframes`
0%{
  transform: translate(0);
}
100% {
  transform: translate(-100rem);
}
`;

export const Container = styled.div`
  width: 110rem;
  display: flex;
  align-items: center;
  column-gap: 4rem;
  margin: 0 auto;
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  left: -100rem;
  gap: 0 2.5rem;
  &.left-entered {
    animation: ${MoveLeft} 1s forwards;
  }
  &.right-entered {
    animation: ${MoveRight} 1s forwards;
  }
`;

export const SliderWrapper = styled.div`
  /* display: flex; */
  max-width: 100rem;
  overflow: hidden;
`;

export const PictureContainer = styled.div``;

export const PaintPicture = styled.img``;

export const ArrowBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
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

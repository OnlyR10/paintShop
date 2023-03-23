import styled, { keyframes } from "styled-components";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../../assets/icons/RightArrow.svg";

const MoveLeft = keyframes`
0%{
  transform: translate(0);
}
100% {
  transform: translate(100rem);
  /* transform: translate(102.5rem); */
}
`;

const MoveRight = keyframes`
0%{
  transform: translate(0);
}
100% {
  transform: translate(-100rem);
  /* transform: translate(-102.5rem); */
}
`;

export const Container = styled.div`
  width: 112rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin: 0 auto;
`;

export const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  left: -100rem;
  /* left: -102.5rem; */
  /* gap: 0 2.5rem; */
  &.left-entered {
    animation: ${MoveLeft} 1s forwards;
  }
  &.right-entered {
    animation: ${MoveRight} 1s forwards;
  }
`;

export const SliderWrapper = styled.div`
  /* max-width: 100rem;
  overflow: hidden; */

  // Чтобы картинки были одинаковой высоты
  max-width: 100rem;
  max-height: 65.5rem;
  overflow: hidden;
  display: flex;
`;

export const PictureContainer = styled.div``;

export const PaintPicture = styled.img``;

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

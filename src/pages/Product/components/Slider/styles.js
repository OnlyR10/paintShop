import styled, { css } from "styled-components";
import { MAIN_PALETTE } from "../../../../config/palette";
// import { Wrapper } from "../../../../layout/styles";
import LeftArrow from "../../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../../assets/icons/RightArrow.svg";

export const Container = styled.div`
  width: 110rem;
  display: flex;
  align-items: center;
  column-gap: 4rem;
  margin: 0 auto;
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
`;

export const SliderContainer = styled.div`
  max-width: 100rem;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
`;

export const PictureContainer = styled.div`
  /* width: 60rem; */
`;

export const PaintPicture = styled.img`
  /* width: 100%; */
`;

export const ArrowBox = styled.div`
  width: 25px;
  height: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${({ lock }) =>
    lock &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;
export const ArrowLeft = styled(ArrowBox)`
  background-image: url(${LeftArrow});
`;
export const ArrowRight = styled(ArrowBox)`
  background-image: url(${RightArrow});
`;

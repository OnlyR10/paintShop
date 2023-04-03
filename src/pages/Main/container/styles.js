import styled, { keyframes } from "styled-components";
import { PageContainer } from "../../../components/PageContainer";
import { MAIN_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";

const sachshellAnimation = keyframes`
0% {
  transform: translate(0);
  /* opacity: 0; */
}
50% {
  /* opacity: 1; */
}
100% {
  transform: translate(100%);
   /* opacity: 0; */
}
`;

const appearanceMainPage = keyframes`
0% {
  opacity: 0.2;
  transform: translateY(-2vh);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Container = styled(PageContainer)``;

// export const Sachshell = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const Text = styled.div`
//   margin: 0;
//   padding: 0;
//   font-family: "Inter-Black";
//   font-size: 10rem;
//   position: relative;

//   &&::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100%;
//     height: 100%;
//     background-color: #ffff;
//     opacity: 0.5;
//     animation: ${sachshellAnimation} 2s linear;
//   }
// `;

// export const Sachshell = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const TextContainer = styled.div`
//   position: relative;
// `;

// export const Veil = styled.div`
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: block;
//   width: 100%;
//   height: 100%;
//   background-color: red;
//   animation: ${sachshellAnimation} 5s linear;
// `;

// export const Text = styled.p`
//   margin: 0;
//   padding: 0;
//   font-family: "Inter-Black";
//   font-size: 10rem;
// `;

export const ContentContainer = styled.div`
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
  animation: ${appearanceMainPage} 1s linear;
`;

export const IntroductionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 6rem 30rem 4rem;
`;

export const PictureContainer = styled.div`
  max-width: 35rem;
  min-width: 20rem;
`;

export const Logotype = styled.img`
  width: 100%;
`;

export const Introduction = styled.h4`
  margin: 0;
  font-family: "Inter-ExtraLight";
  font-size: 2rem;
  text-align: center;
`;

export const TextDefinition = styled.span`
  font-family: "Inter-Bold";
`;

export const PaintWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem 3rem;
  /* min-height: 20vh; */
  padding: 2rem 10rem;
`;

import styled, { css } from "styled-components";
import upload from "../../../assets/icons/upload.svg";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";

export const Container = styled.main`
  width: 100%;
  padding-top: calc(10vh + 6rem);
  flex: 1 0 auto;
  visibility: ${({ render }) => (render ? "visible" : "hidden")};
`;

export const SliderBlock = styled.div`
  width: 100%;
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
`;

export const ProductWrapper = styled(Wrapper)`
  max-width: 96rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 2rem 10rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ShortDescription = styled.div`
  padding: 0 2rem;
  text-align: center;
`;

export const PaintTitle = styled.h2`
  margin: 0;
  padding: 1rem 0;
  font-family: "Inter-Bold";
  font-size: 3.6rem;
`;

export const PaintDescription = styled.p`
  margin: 0;
  padding: 1rem 0;
  font-family: "Inter-Regular";
  font-size: 2rem;
`;

export const InfoContainer = styled.div`
  padding: 2rem;
  border: 0.1rem solid ${MAIN_PALETTE.productSecondElementBackground};
  border-radius: 2rem;
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
`;

export const ControlPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 5rem;
  margin-bottom: 2rem;
`;

const buttonStyle = css`
  min-width: 10rem;
  padding: 1rem 2rem;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
  border-radius: 2rem;
  background-color: ${MAIN_PALETTE.productFirstElementBackground};
  font-family: "Inter-Regular";
  font-size: 2rem;
  :hover {
    background-color: ${MAIN_PALETTE.edgingBackground};
    transition: background-color 0.3s;
  }
  :active {
    background-color: ${MAIN_PALETTE.edgingBackground};
    color: goldenrod;
  }
`;

export const LinkButton = styled.button`
  cursor: pointer;
  ${buttonStyle}
  &.active {
    background-color: ${MAIN_PALETTE.edgingBackground};
  }
`;

export const FileDownloadButton = styled.a`
  ${buttonStyle}
  text-decoration: none;
  color: ${TEXT_PALETTE.main};
`;

export const UploadIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${upload});
`;

export const Text = styled.p`
  margin: 1rem 0;
  font-family: "Inter-Regular";
  font-size: 1.6rem;
  color: ${TEXT_PALETTE.linkText};
`;

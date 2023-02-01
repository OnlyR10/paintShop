import styled from "styled-components";
import upload from "../../../assets/icons/upload.svg";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";

export const Container = styled.main`
  width: 100%;
  padding-top: 10vh;
  flex: 1 0 auto;
`;

export const SliderContainer = styled.div`
  width: 100%;
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
`;

export const ProductWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  padding: 2rem 10rem;
`;

export const PictureContainer = styled.div`
  max-width: 20rem;
  min-width: 10rem;
`;

export const PaintPicture = styled.img`
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const ShortDescription = styled.div`
  padding: 0 2rem;
`;

export const PaintTitle = styled.h2`
  margin: 0;
  padding: 1rem 0;
  font-family: "Serif-Bold";
  font-size: 3.6rem;
`;

export const PaintDescription = styled.p`
  margin: 0;
  padding: 1rem 0;
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
  column-gap: 5rem;
`;

export const LinkButton = styled.button`
  min-width: 10rem;
  padding: 1rem 2rem;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
  border-radius: 2rem;
  background-color: ${MAIN_PALETTE.productFirstElementBackground};
  font-family: "Serif-Regular";
  font-size: 1.6rem;
  transition: all 0.3s;
  &&:hover {
    background-color: ${MAIN_PALETTE.edgingBackground};
  }
`;

export const Description = styled(LinkButton)``;

export const Application = styled(LinkButton)``;

export const Characteristics = styled(LinkButton)``;

export const ColorPalette = styled(LinkButton)``;

export const FileDownloadButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 5rem;
  text-align: center;
  text-decoration: none;
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
  font-family: "Serif-Regular";
  font-size: 1.6rem;
  color: ${TEXT_PALETTE.linkText};
`;

import styled from "styled-components";
import { MAIN_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";

export const Container = styled.main`
  width: 100%;
  padding-top: 10vh;
  flex: 1 0 auto;
`;

export const PaintContainer = styled.div`
  width: 100%;
  background-color: ${({ index }) =>
    index % 2 ? MAIN_PALETTE.productFirstElementBackground : MAIN_PALETTE.productSecondElementBackground};
`;

export const PaintWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  min-height: 20vh;
  padding: 2rem 10rem;
`;

import styled from "styled-components";
import { MAIN_PALETTE } from "../../../../config/palette";
import { Wrapper } from "../../../../layout/styles";

export const PaintContainer = styled.div`
  width: 100%;
  background-color: ${({ index }) =>
    index % 2 ? MAIN_PALETTE.productFirstElementBackground : MAIN_PALETTE.productSecondElementBackground};
`;

export const PaletteWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  column-gap: 3rem;
  padding: 2rem 10rem;
`;

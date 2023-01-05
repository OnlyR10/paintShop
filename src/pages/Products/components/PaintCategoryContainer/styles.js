import styled from "styled-components";
import { Wrapper } from "../../../../layout/styles";

export const PaintContainer = styled.div`
  width: 100%;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

export const PaletteWrapper = styled(Wrapper)`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  flex-wrap: wrap;
  padding: 20px 100px 20px;
`;

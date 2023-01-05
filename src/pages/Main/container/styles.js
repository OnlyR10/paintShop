import styled from "styled-components";
import { Wrapper } from "../../../layout/styles";

export const Container = styled.main`
  width: 100%;
  padding-top: 10vh;
  background-color: #d2cab1;
  flex: 1 0 auto;
`;

export const PaintWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  min-height: 20vh;
  padding: 20px 100px 20px;
`;

export const PaintContainer = styled.div`
  width: 100%;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

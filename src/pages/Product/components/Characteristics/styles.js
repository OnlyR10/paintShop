import styled from "styled-components";
import { MAIN_PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
  /* border-spacing: 1rem; */
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

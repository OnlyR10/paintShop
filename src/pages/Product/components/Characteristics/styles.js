import styled from "styled-components";
import { MAIN_PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

export const Table = styled.table`
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
  /* border-spacing: 1rem; */
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  flex: 1;
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 2rem;
  font-size: 2.2rem;
  text-align: left;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
`;

export const TableBody = styled.tbody`
  flex: 1;
`;

export const TableData = styled.td`
  padding: 1rem 3rem 1rem 1.2rem;
  font-size: 1.8rem;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
`;

import styled from "styled-components";
import { MAIN_PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  padding-top: 0;
`;

export const InfoContainer = styled.div`
  padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0")};
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-family: "Inter-Bold";
  font-size: 3rem;
`;

export const Text = styled.p`
  font-family: "Inter-Regular";
  font-size: 2rem;
  text-align: justify;
  margin: 0;
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  flex: 1;
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

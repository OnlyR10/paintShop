import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../config/breakpoints";
import { MAIN_PALETTE } from "../../config/palette";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ about }) => (about ? "1.5rem 0 2rem" : "1.5rem 0 0")};
`;

export const Table = styled.table`
  flex: 1;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
  border-collapse: collapse;
  word-break: ${({ wordbreak }) => (wordbreak ? "break-word" : "normal")};
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  min-width: ${({ minwidth }) => (minwidth ? "8rem" : "auto")};
  padding: 2rem;
  font-family: "Inter-Bold";
  font-size: 2.2rem;
  text-align: left;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};

  @media ${BREAKPOINTS.smartphone} {
    padding: 2rem 1rem;
    ${({ about }) =>
      !about &&
      css`
        font-size: 1.8rem;
      `}
  }

  @media ${BREAKPOINTS.mobile} {
    padding: 1rem;
    text-align: center;
  }
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 1rem 3rem 1rem 1.2rem;
  font-size: 2rem;
  font-family: "Inter-Regular";
  text-align: left;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};

  @media ${BREAKPOINTS.tablet} {
    padding: 1rem;
  }

  @media ${BREAKPOINTS.smartphone} {
    padding: 2rem 1rem;
    ${({ about }) =>
      !about &&
      css`
        font-size: 1.4rem;
      `}
  }

  @media ${BREAKPOINTS.mobile} {
    padding: 1rem 0.5rem;
    text-align: center;
  }
`;

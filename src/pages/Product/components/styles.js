import styled from "styled-components";
import { BREAKPOINTS } from "../../../config/breakpoints";
import { MAIN_PALETTE } from "../../../config/palette";

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

  @media ${BREAKPOINTS.mobile} {
    text-align: center;
  }
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 2rem;
  font-size: 2.2rem;
  text-align: left;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};

  @media ${BREAKPOINTS.mobile} {
    padding: 2rem 1rem;
  }
`;

export const TableData = styled.td`
  padding: 1rem 3rem 1rem 1.2rem;
  font-size: 1.8rem;
  text-align: left;
  border: 1px solid ${MAIN_PALETTE.edgingBackground};
`;

import styled from "styled-components";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  padding-top: 0;
`;

export const InfoContainer = styled.div`
  padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0")};
`;

export const Link = styled.a`
  display: block;
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 0.2rem solid transparent;
  font-family: "Inter-Regular";
  font-size: 2rem;
  line-height: 3rem;
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;
  :hover {
    color: ${TEXT_PALETTE.active};
    transition: color 0.3s;
  }
  :active {
    color: ${TEXT_PALETTE.active};
    border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
  }
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

export const TableBody = styled.tbody`
  flex: 1;
`;

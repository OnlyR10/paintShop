import styled from "styled-components";
import { BREAKPOINTS } from "../../../../config/breakpoints";

export const Container = styled.div`
  padding-top: 0;
  word-break: break-word;
`;

export const InfoContainer = styled.div`
  padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0")};

  @media ${BREAKPOINTS.smartphone} {
    padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0 0")};
  }
`;

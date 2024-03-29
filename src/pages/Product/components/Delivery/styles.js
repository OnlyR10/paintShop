import styled from "styled-components";
import { BREAKPOINTS } from "../../../../config/breakpoints";
import { TEXT_PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  padding-top: 0;
  word-break: break-word;
`;

export const InfoContainer = styled.div`
  padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0")};
`;

export const Link = styled.a`
  display: inline-block;
  padding-bottom: 1rem;
  border-bottom: 0.2rem solid transparent;
  font-family: "Inter-Regular";
  font-size: 2rem;
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

  @media ${BREAKPOINTS.smartphone} {
    font-size: 1.4rem;
  }
`;

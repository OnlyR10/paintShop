import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINTS } from "../../../../config/breakpoints";
import { TEXT_PALETTE } from "../../../../config/palette";

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

export const Term = styled.span`
  font-family: "Inter-Bold";
  font-size: 3rem;
`;

export const UList = styled.ul`
  margin: 0;
`;

export const List = styled.li`
  font-family: "Inter-Regular";
  font-size: 2rem;
  text-align: justify;
  margin: 0;
`;

export const NavigationLink = styled(Link)`
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;
  border-bottom: 0.2rem solid transparent;
  transition: all 0.3s;

  :hover {
    color: ${TEXT_PALETTE.active};
  }
  :active {
    border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
  }
`;

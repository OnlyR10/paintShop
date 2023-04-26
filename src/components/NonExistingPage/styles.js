import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINTS } from "../../config/breakpoints";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../config/palette";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${MAIN_PALETTE.productSecondElementBackground};
`;

export const Content = styled.div`
  font-family: "Inter-Regular";
  padding: 0 5rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 20rem;
  color: ${TEXT_PALETTE.active};
  text-align: center;
  margin: 0;
  text-shadow: 4px 4px 1px ${MAIN_PALETTE.main};

  @media ${BREAKPOINTS.smartphone} {
    font-size: 12rem;
  }
`;

export const Text = styled.p`
  color: ${TEXT_PALETTE.main};
  font-size: 2rem;
  margin-top: 0.1rem;
`;

export const NavigationLink = styled(Link)`
  padding: 0.5rem 0;
  font-family: "Inter-SemiBold";
  font-size: 2rem;
  color: ${TEXT_PALETTE.main};
  text-decoration: none;
  border-bottom: 0.2rem solid transparent;
  :hover {
    color: ${TEXT_PALETTE.active};
    transition: color 0.3s;
  }
  :active {
    color: ${TEXT_PALETTE.active};
    border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
  }
`;

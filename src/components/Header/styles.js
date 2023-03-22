import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../config/palette";
import { Wrapper } from "../../layout/styles";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: ${MAIN_PALETTE.logoBackground};
  z-index: 2;
`;

export const HeaderWrapper = styled(Wrapper)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8rem;
`;

export const LogoContainer = styled(Link)`
  width: 16rem;
  height: 8rem;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 4rem;
`;

export const NavigationLink = styled(NavLink)`
  font-family: "Inter-SemiBold";
  font-size: 2rem;
  color: ${TEXT_PALETTE.navigationLink};
  text-decoration: none;
  border-bottom: 0.2rem solid transparent;
  :hover {
    color: goldenrod;
    transition: color 0.3s;
  }
  :active {
    color: goldenrod;
    border-bottom: 0.2rem solid goldenrod;
  }
  &&.active {
    border-bottom: 0.2rem solid ${TEXT_PALETTE.navigationLink};
    transition: all 0.3s;
    &&:hover {
      border-bottom: 0.2rem solid goldenrod;
    }
  }
`;

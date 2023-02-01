import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../config/palette";
import { Wrapper } from "../../layout/styles";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: ${MAIN_PALETTE.edgingBackground};
  /* background-color: black; */
  z-index: 2;
  overflow-y: hidden;
`;

export const HeaderWrapper = styled(Wrapper)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8rem;
`;

export const LogoContainer = styled(Link)`
  width: 25.6rem;
  height: 14.4rem;
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

export const NavigationLink = styled(Link)`
  font-family: "Serif-SemiBold";
  font-size: 2rem;
  color: ${TEXT_PALETTE.main};
  /* color: white; */
  text-decoration: none;
`;

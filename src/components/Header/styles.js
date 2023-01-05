import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";
import { Wrapper } from "../../layout/styles";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: #d2cacd;
  z-index: 2;
`;

export const HeaderWrapper = styled(Wrapper)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 80px;
`;

export const LogoContainer = styled(Link)`
  width: 256px;
  height: 144px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 40px;
`;

export const NavigationLink = styled(Link)`
  font-family: "Serif-SemiBold";
  font-size: 1.6rem;
  color: black;
  text-decoration: none;
`;

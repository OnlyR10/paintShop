import { Link, NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import logo from "../../assets/images/logo.png";
import { BREAKPOINTS } from "../../config/breakpoints";
import { MAIN_PALETTE, TEXT_PALETTE } from "../../config/palette";
import { Wrapper } from "../../layout/styles";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: ${MAIN_PALETTE.logoBackground};
  z-index: 2;

  @media ${BREAKPOINTS.tablet} {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-areas: "logo contacts burgerMenu";
    justify-content: space-between;
    align-items: center;
  }

  @media ${BREAKPOINTS.smartphone} {
    grid-template-columns: 7rem 1fr 7rem;
    grid-template-areas: ". contacts burgerMenu";
  }

  @media ${BREAKPOINTS.mobile} {
    grid-template-columns: 6rem 1fr 6rem;
    grid-template-areas: ". contacts burgerMenu";
  }
`;

const TurnLeft = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
         transform: rotate(-90deg);
    }
`;

const TurnRight = keyframes`
    0% {
         transform: rotate(-90deg);
    }

    100% {
         transform: rotate(0);
    }
`;

export const BurgerMenu = styled.div`
  position: relative;
  width: 3rem;
  padding: 2rem;
  grid-area: burgerMenu;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  cursor: pointer;

  &:hover > div {
    border-color: ${TEXT_PALETTE.active};
    transition: color 0.3s;
  }

  @media ${BREAKPOINTS.mobile} {
    padding: 1.5rem;
  }

  &.entering {
    animation: ${TurnLeft} 0.5s forwards;
  }
  &.entered {
    transform: rotate(-90deg);
  }
  &.exiting {
    animation: ${TurnRight} 0.5s forwards;
  }
  &.exited {
    transform: rotate(0);
  }
`;

export const Veil = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  opacity: 0.5;
`;

const MoveLeft = keyframes`
    0% {
        left: 100%;
    }

    100% {
        left: calc(100% - 30.3rem);
    }
`;

const MoveRight = keyframes`
    0% {
        left: calc(100% - 30.3rem);
    }

    100% {
        left: 100%;
    }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 10vh;
  right: 0;
  width: 30.3rem;
  height: 100vh;
  /* padding: 2rem; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${MAIN_PALETTE.logoBackground};
  z-index: 1;

  &.entering {
    animation: ${MoveLeft} 0.5s forwards;
  }
  &.exiting {
    animation: ${MoveRight} 0.5s forwards;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-width: 0.1em;
  border-style: solid;
  border-color: ${TEXT_PALETTE.navigationLink};
`;

export const Circle = styled.div`
  position: absolute;
  top: calc(50% - 3rem);
  left: calc(50% - 3rem);
  width: 6rem;
  height: 6rem;
  box-sizing: border-box;
  border: 0.2rem solid ${TEXT_PALETTE.navigationLink};
  border-radius: 50%;
`;

export const HeaderWrapper = styled(Wrapper)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8rem;
  padding: 0 1rem;

  @media ${BREAKPOINTS.extra} {
    column-gap: 5rem;
  }

  @media ${BREAKPOINTS.laptop} {
    column-gap: 2rem;
  }
`;

export const LogoContainer = styled(Link)`
  width: 16rem;
  height: 8rem;
  grid-area: logo;
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
  text-align: center;

  @media ${BREAKPOINTS.laptop} {
    gap: 0 2rem;
  }

  ${({ isBurger }) =>
    isBurger &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem 4rem;
      padding-top: 2rem;

      @media ${BREAKPOINTS.laptop} {
        gap: 2rem 4rem;
      }
    `}
`;

export const NavigationLink = styled(NavLink)`
  padding: 0.5rem 0;
  font-family: "Inter-SemiBold";
  font-size: 2rem;
  color: ${TEXT_PALETTE.navigationLink};
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
  &&.active {
    border-bottom: 0.2rem solid ${TEXT_PALETTE.navigationLink};
    transition: all 0.3s;
    &&:hover {
      border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
    }
  }
`;

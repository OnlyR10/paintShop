import styled from "styled-components";
import { Wrapper } from "../../Layout/styles";
import { PageContainer } from "../../components/PageContainer";
import { BREAKPOINTS } from "../../config/breakpoints";
import { TEXT_PALETTE } from "../../config/palette";

export const Container = styled(PageContainer)`
  @media ${BREAKPOINTS.tablet} {
    padding-top: calc(8rem);
  }
`;

export const AboutWrapper = styled(Wrapper)`
  padding: 0 10rem;

  @media ${BREAKPOINTS.tablet} {
    padding: 0 5rem;
  }

  @media ${BREAKPOINTS.tablet} {
    padding: 0 3rem 2rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 2rem 0 1rem;
  font-size: 2.6rem;
  font-family: "Inter-Bold";

  @media ${BREAKPOINTS.smartphone} {
    text-align: center;
  }
`;

export const Link = styled.a`
  margin: 0;
  border-bottom: 0.2rem solid transparent;
  font-family: "Inter-Regular";
  font-size: 2rem;
  line-height: 3rem;
  color: ${TEXT_PALETTE.linkText};
  text-align: justify;
  text-decoration: none;

  @media ${BREAKPOINTS.smartphone} {
    display: block;
    text-align: center;
  }

  :hover {
    color: ${TEXT_PALETTE.active};
    transition: color 0.3s;
  }
  :active {
    color: ${TEXT_PALETTE.active};
    border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
  }
`;

export const Comma = styled.span`
  margin: 0;
  padding: 1rem 1rem 0 0;
  font-family: "Inter-Regular";
  font-size: 2rem;
  color: ${TEXT_PALETTE.linkText};
`;

export const Text = styled.p`
  margin: 0;
  font-family: "Inter-Regular";
  font-size: 2rem;
  line-height: 3rem;
  text-align: justify;

  @media ${BREAKPOINTS.smartphone} {
    text-align: center;
  }
`;

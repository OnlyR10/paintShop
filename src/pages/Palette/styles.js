import styled from "styled-components";
import { Wrapper } from "../../Layout/styles";
import { PageContainer } from "../../components/PageContainer";
import { BREAKPOINTS } from "../../config/breakpoints";

export const Container = styled(PageContainer)`
  @media ${BREAKPOINTS.tablet} {
    padding-top: calc(10vh);
  }
`;

export const PaletteWrapper = styled(Wrapper)`
  padding: 0 10rem;

  @media ${BREAKPOINTS.tablet} {
    padding: 0 5rem;
  }

  @media ${BREAKPOINTS.tablet} {
    padding: 0 3rem 3rem;
  }
`;

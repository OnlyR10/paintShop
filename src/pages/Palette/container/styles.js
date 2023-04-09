import styled from "styled-components";
import { PageContainer } from "../../../components/PageContainer";
import { BREAKPOINTS } from "../../../config/breakpoints";
import { Wrapper } from "../../../layout/styles";

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

  @media ${BREAKPOINTS.mobile} {
    padding: 0 2rem;
  }
`;

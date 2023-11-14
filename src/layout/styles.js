import styled from "styled-components";
import { PageContainer } from "../components/PageContainer";
import { BREAKPOINTS } from "../config/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  /* width: 192rem; */
  max-width: 160rem;
  margin: 0 auto;
`;

export const FallbackContainer = styled(PageContainer)`
  text-align: center;
  font-size: 8rem;

  @media ${BREAKPOINTS.smartphone} {
    font-size: 5rem;
  }

  @media ${BREAKPOINTS.mobile} {
    font-size: 4rem;
  }
`;

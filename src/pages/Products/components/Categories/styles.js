import styled from "styled-components";
import { BREAKPOINTS } from "../../../../config/breakpoints";

export const PaintsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding-top: 1rem;

  @media ${BREAKPOINTS.laptop} {
    justify-content: center;
  }

  @media ${BREAKPOINTS.tablet} {
    gap: 2rem 4rem;
  }
`;

export const EmptyWall = styled.div`
  margin: 0 auto;
  font-family: "Inter-SemiBold";
  font-size: 3rem;
`;

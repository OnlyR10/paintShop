import styled from "styled-components";
import { BREAKPOINTS } from "../../../config/breakpoints";

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-family: "Inter-Bold";
  font-size: 3rem;

  @media ${BREAKPOINTS.smartphone} {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  font-family: "Inter-Regular";
  font-size: 2rem;
  margin: 0;

  @media ${BREAKPOINTS.smartphone} {
    font-size: 1.4rem;
    text-align: left;
  }
`;

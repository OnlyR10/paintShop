import styled from "styled-components";
import { BREAKPOINTS } from "../../../config/breakpoints";

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-family: "Inter-Bold";
  font-size: 3rem;
`;

export const Text = styled.p`
  font-family: "Inter-Regular";
  font-size: 2rem;
  text-align: justify;
  margin: 0;

  @media ${BREAKPOINTS.smartphone} {
    text-align: center;
  }
`;

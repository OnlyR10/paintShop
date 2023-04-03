import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  padding-top: ${({ mainPage }) => (mainPage ? "10vh" : "calc(10vh + 6rem)")};
  flex: 1 0 auto;
`;

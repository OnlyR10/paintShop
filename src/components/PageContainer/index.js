import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  padding-top: ${({ mainPage }) => (mainPage ? "8rem" : "calc(8rem + 6rem)")};
  flex: 1 0 auto;
`;

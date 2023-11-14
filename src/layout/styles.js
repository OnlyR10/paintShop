import styled from "styled-components";
import { PageContainer } from "../components/PageContainer";

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
`;

import styled from "styled-components";
import { Wrapper } from "../../layout/styles";

export const Container = styled.footer`
  width: 100%;
  background-color: #d2cacd;
  flex: 0 0 auto;
`;

export const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 80px;
`;

export const Requisites = styled.div`
  font-family: "Serif-SemiBold";
  font-size: 1.6rem;
`;

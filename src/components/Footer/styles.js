import styled from "styled-components";
import { MAIN_PALETTE } from "../../config/palette";
import { Wrapper } from "../../layout/styles";

export const Container = styled.footer`
  width: 100%;
  background-color: ${MAIN_PALETTE.edgingBackground};
  flex: 0 0 auto;
`;

export const FooterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8rem;
`;

export const Requisites = styled.div`
  font-family: "Serif-SemiBold";
  font-size: 1.6rem;
`;

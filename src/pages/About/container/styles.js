import styled from "styled-components";
import { TEXT_PALETTE } from "../../../config/palette";
import { Wrapper } from "../../../layout/styles";
import { TableContainer as Table } from "../../Product/components/Delivery/styles";

export const Container = styled.div`
  width: 100%;
  padding-top: calc(10vh + 6rem);
  flex: 1 0 auto;
`;

export const AboutWrapper = styled(Wrapper)`
  padding: 0 10rem;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 2rem 0 1rem;
  font-family: "Inter-Bold";
  font-size: 2.6rem;
`;

export const Link = styled.a`
  margin: 0;
  border-bottom: 0.2rem solid transparent;
  font-family: "Inter-Regular";
  font-size: 2rem;
  line-height: 3rem;
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;
  :hover {
    color: goldenrod;
    transition: color 0.3s;
  }
  :active {
    color: goldenrod;
    border-bottom: 0.2rem solid goldenrod;
  }
`;

export const Comma = styled.span`
  margin: 0;
  padding: 1rem 1rem 0 0;
  font-family: "Inter-Regular";
  font-size: 2rem;
  color: ${TEXT_PALETTE.linkText};
`;

export const Text = styled.p`
  margin: 0;
  font-family: "Inter-Regular";
  font-size: 2rem;
`;

export const TableContainer = styled(Table)`
  padding: 1.5rem 0 2rem;
`;

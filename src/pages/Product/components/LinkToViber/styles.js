import styled from "styled-components";
import { TEXT_PALETTE } from "../../../../config/palette";

export const Container = styled.div`
  padding: 1rem 1.5rem;

  border: 0.1rem solid yellow;
  border-radius: 2rem;
  background: yellow;

  transition: border-color 0.3s;

  :hover {
    border-color: ${TEXT_PALETTE.active};
  }

  :active > [data-scope="viber-link"] {
    border-bottom-color: ${TEXT_PALETTE.active};
  }
`;

export const ViberLink = styled.a`
  font-family: "Inter-Regular";
  font-size: 2rem;
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;

  border-bottom: 1px solid transparent;

  transition: border-bottom 0.3s;
`;

/* export const ViberLink = styled.a`
  padding: 1rem 1.5rem;

  border: 0.1rem solid yellow;
  border-radius: 2rem;
  background: yellow;
  font-family: "Inter-Regular";
  font-size: 2rem;
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;

  transition: border-color 0.3s;

  :hover {
    border-color: ${TEXT_PALETTE.active};
  }

  :active {
    // color: ${TEXT_PALETTE.active};
    text-decoration: underline ${TEXT_PALETTE.active};
  }
`; */

export const Container2 = styled.div`
  width: max-content;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  border: 0.1rem solid yellow;
  border-radius: 2rem;
  background: yellow;

  cursor: pointer;
  transition: all 0.3s;

  :hover {
    border-color: ${TEXT_PALETTE.active};
    background: ${TEXT_PALETTE.active};
  }

  :active > [data-scope="viber-link"] {
    color: ${TEXT_PALETTE.navigationLink};
  }
`;

export const ViberLink2 = styled.a`
  font-family: "Inter-Regular";
  font-size: 2rem;
  color: ${TEXT_PALETTE.linkText};
  text-decoration: none;

  border-bottom: 0.1rem solid transparent;

  transition: all 0.3s;
`;

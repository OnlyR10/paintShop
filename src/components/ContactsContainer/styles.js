import styled from "styled-components";
import instagram from "../../assets/icons/instagram.svg";
import onliner from "../../assets/icons/onliner.svg";
import { TEXT_PALETTE } from "../../config/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4rem;
`;

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 2rem;
`;

export const Label = styled.p`
  font-family: "Inter-SemiBold";
  font-size: 2rem;
  color: ${TEXT_PALETTE.navigationLink};
`;

export const ContactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem 0;
`;

export const ContactBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  font-family: "Inter-SemiBold";
  font-size: 2rem;
  color: ${TEXT_PALETTE.navigationLink};
  text-decoration: none;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Contact = styled.span`
  border-bottom: 0.2rem solid transparent;
  :hover {
    color: ${TEXT_PALETTE.active};
    transition: color 0.3s;
  }
  :active {
    color: ${TEXT_PALETTE.active};
    border-bottom: 0.2rem solid ${TEXT_PALETTE.active};
  }
`;

export const IconInstagram = styled(Icon)`
  background-image: url(${instagram});
`;

export const IconOnliner = styled(Icon)`
  background-image: url(${onliner});
`;

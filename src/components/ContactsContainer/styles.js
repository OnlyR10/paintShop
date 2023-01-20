import styled from "styled-components";
import phone from "../../assets/icons/phone.svg";
import instagram from "../../assets/icons/instagram.svg";
import onliner from "../../assets/icons/onliner.svg";
import { TEXT_PALETTE } from "../../config/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4rem;
`;

export const ContactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem 0;
`;

export const Contact = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  font-family: "Serif-SemiBold";
  font-size: 1.6rem;
  color: ${TEXT_PALETTE.main};
  text-decoration: none;
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const IconPhone = styled(Icon)`
  background-image: url(${phone});
`;

export const IconInstagram = styled(Icon)`
  background-image: url(${instagram});
`;

export const IconOnliner = styled(Icon)`
  background-image: url(${onliner});
`;

import styled from "styled-components";

export const Container = styled.div`
  padding-top: 0;
`;

export const InfoContainer = styled.div`
  padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0")};
`;

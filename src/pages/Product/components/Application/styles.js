import styled from "styled-components";

export const Container = styled.div`
  padding-top: 0;
`;

export const InfoContainer = styled.div`
  padding: ${({ firstelem }) => (firstelem ? 0 : "1.5rem 0")};
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-family: "Serif-Bold";
  font-size: 3rem;
`;

export const Text = styled.p`
  font-family: "Serif-Regular";
  font-size: 2rem;
  text-align: justify;
  margin: 0;
`;

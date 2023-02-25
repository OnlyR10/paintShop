import React from "react";
import { Container, InfoContainer, Text, Title } from "./styles";

export const Description = ({ paint }) => {
  const { technicalData, purpose, ...description } =
    paint.documentation.description;

  return (
    <Container>
      {Object.values(description).map(({ value, label }, index) => {
        return (
          <InfoContainer key={label} firstelem={index === 0}>
            <Title>{label}</Title>
            <Text>{value}</Text>
          </InfoContainer>
        );
      })}
    </Container>
  );
};

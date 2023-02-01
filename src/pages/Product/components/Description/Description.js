import React from "react";
import { Container, InfoContainer, Text, Title } from "./styles";

export const Description = ({ paint }) => {
  const { technicalData, purpose, ...description } = paint.documentation.description;

  return (
    <Container>
      {Object.values(description).map(({ value, label }) => {
        return (
          <InfoContainer key={label}>
            <Title>{label}</Title>
            <Text>{value}</Text>
          </InfoContainer>
        );
      })}
    </Container>
  );
};

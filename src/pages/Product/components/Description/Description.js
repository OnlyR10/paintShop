import React from "react";
import { Container, InfoContainer, Text, Title } from "./styles";

export const Description = ({ paint }) => {
  const { technicalData, ...description } = paint.documentation.description;

  return (
    <Container>
      {Object.entries(description).map(([key, value]) => {
        return (
          <InfoContainer key={key}>
            <Title>{key}</Title>
            <Text>{value}</Text>
          </InfoContainer>
        );
      })}
    </Container>
  );
};

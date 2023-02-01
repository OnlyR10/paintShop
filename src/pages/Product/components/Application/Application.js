import React from "react";
import { Container, InfoContainer, Text, Title } from "./styles";

export const Application = ({ paint }) => {
  const applicationTechnology = paint.documentation.applicationTechnology;

  return (
    <Container>
      {Object.values(applicationTechnology).map(({ value, label }) => {
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

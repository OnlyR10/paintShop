import React from "react";
import { Container, InfoContainer, Text, Title } from "./styles";

export const Application = ({ paint }) => {
  const applicationTechnology = paint.documentation.applicationTechnology;

  return (
    <Container>
      {Object.values(applicationTechnology).map(({ value, label }, index) => {
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

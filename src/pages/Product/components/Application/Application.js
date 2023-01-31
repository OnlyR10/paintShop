import React from "react";
import { Container, InfoContainer, Text, Title } from "./styles";

export const Application = ({ paint }) => {
  const applicationTechnology = paint.documentation.applicationTechnology;

  return (
    <Container>
      {Object.entries(applicationTechnology).map(([key, value]) => {
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

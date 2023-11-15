import { forwardRef } from "react";
import { Text, Title } from "../styles";
import { Container, InfoContainer } from "./styles";

const Application = forwardRef(({ paint }, ref) => {
  const applicationTechnology = paint.documentation.applicationTechnology;

  return (
    <Container ref={ref}>
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
});

export default Application;

import React, { forwardRef } from "react";
import { Text, Title } from "../styles";
import {
  Container,
  InfoContainer,
  List,
  NavigationLink,
  Term,
  UList,
} from "./styles";

export const Description = forwardRef(({ paint }, ref) => {
  const { concept, properties, colorSolutions, ...description } =
    paint.documentation.description;

  return (
    <Container ref={ref}>
      <InfoContainer firstelem>
        <Text>
          <Term>{concept.label}</Term> - {concept.value}
        </Text>
      </InfoContainer>

      {properties ? (
        <InfoContainer>
          <Title>{properties.label}</Title>

          <UList note={properties.note}>
            {properties.value.map((point) => {
              return <List key={point}>{point}</List>;
            })}
          </UList>

          {properties.note
            ? properties.note.map((note) => {
                return (
                  <Text style={{ marginTop: "1rem" }} key={note}>
                    {note}
                  </Text>
                );
              })
            : null}
        </InfoContainer>
      ) : null}

      {Object.values(description).map(({ value, label }) => {
        return (
          <InfoContainer key={label}>
            <Title>{label}</Title>
            <Text>{value}</Text>
          </InfoContainer>
        );
      })}

      {colorSolutions ? (
        <InfoContainer>
          <Title>{colorSolutions.label}</Title>
          <Text>
            {colorSolutions.value}{" "}
            <NavigationLink to="https://festek.by/palette">
              https://festek.by/palette
            </NavigationLink>
          </Text>
        </InfoContainer>
      ) : null}
    </Container>
  );
});

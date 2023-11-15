import React from "react";
import { Container, Content, NavigationLink, Text, Title } from "./styles";

const NonExistingPage = () => {
  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Text>Извините, такая страница не найдена!</Text>

        <NavigationLink to="/">Вернуться на главную</NavigationLink>
      </Content>
    </Container>
  );
};

export default NonExistingPage;

import React from "react";
import { ContactsContainer } from "../ContactsContainer/ContactsContainer";
import { Container, HeaderWrapper, LogoContainer, NavigationContainer, NavigationLink } from "./styles";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <LogoContainer to="/" />

        <NavigationContainer>
          <NavigationLink to="/">Главная</NavigationLink>
          <NavigationLink to="/products">Продукты</NavigationLink>
          <NavigationLink to="/palette">Палитра цветов</NavigationLink>
          <NavigationLink to="/about">О нас</NavigationLink>
        </NavigationContainer>

        <ContactsContainer />
      </HeaderWrapper>
    </Container>
  );
};

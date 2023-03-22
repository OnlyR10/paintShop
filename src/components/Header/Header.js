import React from "react";
import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs";
import { ContactsContainer } from "../ContactsContainer/ContactsContainer";
import {
  Container,
  HeaderWrapper,
  LogoContainer,
  NavigationContainer,
  NavigationLink,
} from "./styles";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <LogoContainer to="/" />

        <NavigationContainer>
          <NavigationLink to="/">Главная</NavigationLink>
          <NavigationLink to="/products/all">Продукты</NavigationLink>
          <NavigationLink to="/palette">Палитра цветов</NavigationLink>
          <NavigationLink to="/about">Контакты</NavigationLink>
        </NavigationContainer>

        <ContactsContainer />
      </HeaderWrapper>

      <BreadCrumbs />
    </Container>
  );
};

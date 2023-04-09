import React, { useContext, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { Context } from "../../config/context";
import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs";
import { ContactsContainer } from "../ContactsContainer/ContactsContainer";
import {
  Contact,
  ContactBox,
  ContactsColumn,
} from "../ContactsContainer/styles";
import {
  BurgerMenu,
  Container,
  HeaderWrapper,
  Line,
  LogoContainer,
  MenuContainer,
  NavigationContainer,
  NavigationLink,
  Veil,
} from "./styles";

export const Header = () => {
  const { tablet, smartphone } = useContext(Context);
  const nodeRef = useRef(null);

  const [isBurger, setIsBurger] = useState(false);

  const burgerHandler = () => {
    setIsBurger((state) => !state);
  };

  return (
    <Container>
      {tablet ? (
        <>
          {smartphone ? null : <LogoContainer to="/" />}

          <ContactsColumn>
            <ContactBox href="tel:+375291070568">
              <Contact>+375 29 107 05 68</Contact>
            </ContactBox>
            <ContactBox href="tel:+375297587670">
              <Contact>+375 29 758 76 70</Contact>
            </ContactBox>
          </ContactsColumn>

          <BurgerMenu onClick={burgerHandler}>
            <Line />
            <Line />
            <Line />
          </BurgerMenu>

          <Transition
            in={isBurger}
            timeout={500}
            mountOnEnter
            unmountOnExit
            nodeRef={nodeRef}
          >
            {(state) => {
              return (
                <MenuContainer className={state} ref={nodeRef}>
                  <NavigationContainer isBurger>
                    <NavigationLink to="/" onClick={burgerHandler}>
                      Главная
                    </NavigationLink>
                    <NavigationLink to="/products/all" onClick={burgerHandler}>
                      Продукты
                    </NavigationLink>
                    <NavigationLink to="/palette" onClick={burgerHandler}>
                      Палитра цветов
                    </NavigationLink>
                    <NavigationLink to="/about" onClick={burgerHandler}>
                      Контакты
                    </NavigationLink>
                  </NavigationContainer>
                </MenuContainer>
              );
            }}
          </Transition>

          {isBurger ? <Veil onClick={burgerHandler} /> : null}
        </>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

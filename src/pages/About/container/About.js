import React from "react";
import { AboutWrapper, Comma, Container, Link, Text, Title } from "./styles";

export const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <Title>Юридический (почтовый) адрес:</Title>
        <Link href="https://yandex.by/maps/-/CCUSaUe88D" target="_blank">
          222720, Минская область, Дзержинский район, Боровской с/с, д.
          Бакиново, ул. Центральная, д. 49, помещение No2
        </Link>
        <Title>Склад и пункт самовывоза:</Title>
        <Link href="https://yandex.by/maps/-/CCUSaQhBOC" target="_blank">
          Пос. Ратомка, ул. Октябрьская, д. 4
        </Link>
        <Title>Телефоны:</Title>
        <Link href="tel:+375291070568">+375 29 107 05 68</Link>
        <Comma>,</Comma>
        <Link href="tel:+375297587670">+375 29 758 76 70</Link>
        <Title>Время работы:</Title>
        <Text>пн-пт 9:00-17:00</Text>
        <Title>E-mail:</Title>
        <Link href="mailto:festekbel@gmail.com" target="_blank">
          festekbel@gmail.com
        </Link>
        <Title>Юридическое лицо:</Title>
        <Text>ООО «Экзальт»</Text>
      </AboutWrapper>
    </Container>
  );
};

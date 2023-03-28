import React from "react";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Product/components/Delivery/styles";
import {
  AboutWrapper,
  Comma,
  Container,
  Link,
  TableContainer,
  Text,
  Title,
} from "./styles";

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
        <Text>
          р/с BY78AKBB30120000175180000000 в ОАО «АСБ Беларусбанк» г. Дзержинск,
          ул. К. Маркса, д.17 БИК AKBBBY2X
        </Text>

        <Title>Доставка по Беларуси:</Title>
        <Text>
          Осуществляем доставку по Минской области и РБ транспортом различной
          грузоподъемности.
        </Text>
        <Text>
          Для расчета стоимости доставки, обратитесь к нашим менеджерам.
        </Text>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader colSpan={2}>Доставка по Минску:</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData>Сумма заказа менее 150 руб</TableData>
                <TableData>Сумма заказа более 150 руб</TableData>
              </TableRow>
              <TableRow>
                <TableData>10 рублей доставка</TableData>
                <TableData>Бесплатно</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AboutWrapper>
    </Container>
  );
};

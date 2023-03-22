import {
  Container,
  InfoContainer,
  Link,
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Text,
  Title,
} from "./styles";

export const Delivery = () => {
  return (
    <Container>
      <InfoContainer>
        <Link href="https://yandex.by/maps/-/CCUSaQhBOC" target="_blank">
          Пункт самовывоза по адресу: пос. Ратомка ул. Октябрьская 4
        </Link>
      </InfoContainer>

      <InfoContainer>
        <Title>Доставка по Беларуси:</Title>
        <Text>
          Осуществляем доставку по Минской области и РБ транспортом различной
          грузоподъемности.
        </Text>
        <Text>
          Для расчета стоимости доставки, обратитесь к нашим менеджерам.
        </Text>
      </InfoContainer>

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
    </Container>
  );
};

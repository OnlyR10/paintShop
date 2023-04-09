import { DeliveryTable } from "../../../../components/DeliveryTable";
import { Text, Title } from "../styles";
import { Container, InfoContainer, Link } from "./styles";

export const Delivery = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Пункт самовывоза по адресу:</Title>
        <Link href="https://yandex.by/maps/-/CCUSaQhBOC" target="_blank">
          Пос. Ратомка, ул. Октябрьская, д. 4
        </Link>

        <Title>Доставка по Беларуси:</Title>
        <Text>
          Осуществляем доставку по Минской области и РБ транспортом различной
          грузоподъемности.
        </Text>
        <Text>
          Для расчета стоимости доставки, обратитесь к нашим менеджерам.
        </Text>
      </InfoContainer>

      <DeliveryTable />
    </Container>
  );
};

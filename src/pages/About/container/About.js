import React from "react";
import {
  AboutWrapper,
  Address,
  Container,
  DrivingDirections,
  Header,
  Mail,
  Map,
  Phone,
  Requisites,
  WarehouseAddress,
  WorkingHours,
} from "./styles";

export const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <Header>Контакты</Header>
        <Address>220005, Беларусь, Минск, ул. Платонова, 43, офис 126</Address>
        <WarehouseAddress>220013, Беларусь, Минск, ул. Петруся Бровки, 22, 3 склад</WarehouseAddress>
        <Phone>+375 17 272-35-70</Phone>
        <WorkingHours>пн-пт 9:00-17:00</WorkingHours>
        <Mail>paints@mail.by</Mail>
        <Requisites>
          Наименование компании Общество с ограниченной ответственностью «Элкон Бел» (ООО «Элкон Бел»)
        </Requisites>
        <DrivingDirections></DrivingDirections>
        <Map></Map>
      </AboutWrapper>
    </Container>
  );
};

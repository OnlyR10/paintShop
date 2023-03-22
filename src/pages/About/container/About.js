import React from "react";
import {
  AboutWrapper,
  Comma,
  Container,
  Header,
  Link,
  Text,
  Title,
} from "./styles";

export const About = () => {
  return (
    <Container>
      <AboutWrapper>
        <Title>Юридический (почтовый) адрес:</Title>
        <Link
          href="https://www.google.com/maps/place/%D0%9E%D0%9E%D0%9E%22%D0%AD%D0%BA%D0%B7%D0%B0%D0%BB%D1%8C%D1%82%22/@53.6379728,27.0216029,16z/data=!4m10!1m2!2m1!1z0JHQsNC60LjQvdC-0LLQviA0OQ!3m6!1s0x46d969eb863d62e3:0x74ab63bec10df3d!8m2!3d53.6328206!4d27.0210089!15sChPQkdCw0LrQuNC90L7QstC-IDQ5kgEMbWFudWZhY3R1cmVy4AEA!16s%2Fg%2F11sf1gfnw7"
          target="_blank"
        >
          222720, Минская область Дзержинский район Боровской с/с д. Бакиново
          улица Центральная 49 помещение No2
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

        <Title>?:</Title>
        <Text>ООО «Экзальт»</Text>
      </AboutWrapper>
    </Container>
  );
};

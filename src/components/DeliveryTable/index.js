import {
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "./styles";

export const DeliveryTable = ({ about }) => {
  return (
    <TableContainer about={about}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader colSpan={2} about={about}>
              Доставка по Минску:
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData about={about}>Сумма заказа менее 150 руб</TableData>
            <TableData about={about}>Сумма заказа более 150 руб</TableData>
          </TableRow>
          <TableRow>
            <TableData about={about}>10 рублей доставка</TableData>
            <TableData about={about}>Бесплатно</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

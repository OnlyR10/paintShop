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
  );
};

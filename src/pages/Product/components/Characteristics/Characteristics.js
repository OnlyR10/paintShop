import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/DeliveryTable/styles";

export const Characteristics = ({ paint }) => {
  const technicalData = paint.documentation.description.technicalData;

  return (
    <TableContainer>
      <Table wordbreak="true">
        <TableHead>
          <TableRow>
            <TableHeader>Показатели качества</TableHeader>
            <TableHeader minwidth="true">{`Значение по\u00A0ТУ`}</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {technicalData.map(({ qualityIndicators, value }) => (
            <TableRow key={qualityIndicators}>
              <TableData>{qualityIndicators}</TableData>
              <TableData>{value}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

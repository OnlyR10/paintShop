import React, { forwardRef } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/DeliveryTable/styles";

const Characteristics = forwardRef(({ paint }, ref) => {
  const technicalData = paint.documentation.technicalData;

  return (
    <TableContainer ref={ref}>
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
});

export default Characteristics;

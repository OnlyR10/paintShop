import React from "react";
import { TableData, TableHeader, TableRow } from "../styles";
import { Container, Table, TableBody, TableHead } from "./styles";

export const Characteristics = ({ paint }) => {
  const technicalData = paint.documentation.description.technicalData;

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Показатели качества</TableHeader>
            <TableHeader>{`Значение по\u00A0ТУ`}</TableHeader>
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
    </Container>
  );
};

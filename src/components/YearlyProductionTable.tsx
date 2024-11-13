import React from "react";
import { Table } from "@mantine/core";
import { getYearlyProductionData } from "../dataProcessing";

const YearlyProductionTable: React.FC = () => {
    const data = getYearlyProductionData();

  return (
    <Table style={{width:"100%", textAlign:"center", border:"1px solid black"}}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Max Production</th>
          <th>Crop with Min Production</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ year, maxCrop, minCrop }) => (
          <tr key={year}>
            <td>{year}</td>
            <td>{maxCrop}</td>
            <td>{minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default YearlyProductionTable;

import React from "react";
import { Table } from "@mantine/core";
import { getCropAverages } from "../dataProcessing";

const CropAveragesTable: React.FC = () => {
  const data = getCropAverages();

  return (
    <Table
      style={{ width: "100%", textAlign: "center", border: "1px solid black" }}
    >
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (Kg/Ha)</th>
          <th>Average Cultivation Area (Ha)</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ crop, avgYield, avgArea }) => (
          <tr key={crop}>
            <td>{crop}</td>
            <td>{avgYield}</td>
            <td>{avgArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CropAveragesTable;

// src/App.tsx

import React from 'react';
import { MantineProvider } from '@mantine/core';
import YearlyProductionTable from './components/YearlyProductionTable';
import CropAveragesTable from './components/CropAveragesTable';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <div style={{ padding: '20px' }}>
        <h1>Indian Agriculture Data Analytics</h1>
        <h2>Yearly Production Data</h2>
        <YearlyProductionTable />
        <h2>Crop Averages (1950-2020)</h2>
        <CropAveragesTable />
      </div>
    </MantineProvider>
  );
};

export default App;

import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = () => {
  const data = [
    ['Category', 'Percentage'],
    ['Sports', 40],
    ['Politics', 25],
    ['Technology', 15],
    ['Health', 10],
    ['Entertainment', 10],
  ];

  const options = {
    slices: {
      0: { offset: 0.1 },
      1: { offset: 0.1 },
      2: { offset: 0.1 },
      3: { offset: 0.1 },
      4: { offset: 0.1 },
    },
    pieSliceText: 'percentage',
    chartArea: { width: '100%', height: '80%' },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Pie Chart: News Categories</h2>
      <Chart chartType="PieChart" data={data} options={options} width="100%" height="300px" />
    </div>
  );
};

export default PieChart;

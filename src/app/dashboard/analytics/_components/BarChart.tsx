import React from 'react';
import { Chart } from 'react-google-charts';

const BarChart = () => {
  const data = [
    ['Year', 'Sales', 'Expenses'],
    ['2018', 1000, 400],
    ['2019', 1170, 460],
    ['2020', 660, 1120],
    ['2021', 1030, 540],
  ];

  const options = {
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Sales',
      minValue: 0,
    },
    vAxis: {
      title: 'Year',
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Bar Chart: Sales vs Expenses</h2>
      <Chart chartType="BarChart" data={data} options={options} width="100%" height="300px" />
    </div>
  );
};

export default BarChart;

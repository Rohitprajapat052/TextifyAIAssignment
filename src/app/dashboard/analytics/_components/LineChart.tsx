import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = () => {
  const data = [
    ['Month', 'Revenue', 'Profit'],
    ['Jan', 1000, 400],
    ['Feb', 1200, 460],
    ['Mar', 800, 300],
    ['Apr', 1300, 600],
  ];

  const options = {
    title: 'Revenue and Profit over Months',
    curveType: 'function',
    legend: { position: 'bottom' },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Line Chart: Revenue and Profit</h2>
      <Chart chartType="LineChart" data={data} options={options} width="100%" height="300px" />
    </div>
  );
};

export default LineChart;

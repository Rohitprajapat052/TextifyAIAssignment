import React from 'react';
import { Chart } from 'react-google-charts';

const DoughnutChart = () => {
  const data = [
    ['Category', 'Percentage'],
    ['Sports', 30],
    ['Politics', 25],
    ['Technology', 15],
    ['Health', 20],
    ['Entertainment', 10],
  ];

  const options = {
    pieSliceText: 'percentage',
    chartArea: { width: '100%', height: '80%' },
    slices: { 0: { offset: 0.1 } },
    is3D: true,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Doughnut Chart: News Categories</h2>
      <Chart chartType="PieChart" data={data} options={options} width="100%" height="300px" />
    </div>
  );
};

export default DoughnutChart;

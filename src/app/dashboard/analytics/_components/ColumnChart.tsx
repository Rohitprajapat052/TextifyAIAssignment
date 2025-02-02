import React from 'react';
import { Chart } from 'react-google-charts';

const ColumnChart = () => {
  const data = [
    ['Category', '2021', '2022'],
    ['Sports', 1500, 1800],
    ['Politics', 1100, 1300],
    ['Technology', 1000, 1200],
    ['Health', 1200, 1400],
    ['Entertainment', 800, 900],
  ];

  const options = {
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Viewership',
      minValue: 0,
    },
    vAxis: {
      title: 'Category',
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Column Chart: News Viewership</h2>
      <Chart chartType="ColumnChart" data={data} options={options} width="100%" height="300px" />
    </div>
  );
};

export default ColumnChart;

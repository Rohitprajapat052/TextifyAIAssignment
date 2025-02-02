import React from 'react';
import { Chart } from 'react-google-charts';

const GeoChart = () => {
  const geoData = [
    ['Country', 'Popularity'],
    ['USA', 1200],
    ['India', 1500],
    ['Germany', 800],
    ['UK', 700],
    ['Canada', 900],
    ['Australia', 400],
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Geo Chart: News Popularity</h2>
      <div style={{ height: '300px' }}>
        <Chart chartType="GeoChart" data={geoData} options={{ colorAxis: { colors: ['#f5f5f5', '#3366cc'] } }} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default GeoChart;

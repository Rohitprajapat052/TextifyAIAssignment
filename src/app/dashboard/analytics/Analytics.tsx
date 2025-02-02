'use client';
import React from 'react';
import BarChart from './_components/BarChart';
import LineChart from './_components/LineChart';
import PieChart from './_components/PieChart';
import GeoChart from './_components/GeoChart';
import DoughnutChart from './_components/DraughtChart';
import ColumnChart from './_components/ColumnChart';
import Header from '@/app/components/header/Header';
import SideMenu from '@/app/components/side-menu/SideMenu';

const Analytics = () => {
  return (
<div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideMenu className="w-64 bg-white shadow-md" />

        
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Analytics</h1>
          
          {/* Main Chart Section (Grid Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <BarChart />
            <LineChart />
            <PieChart />
          </div>
          
          {/* Additional Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GeoChart />
            <DoughnutChart />
            <ColumnChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

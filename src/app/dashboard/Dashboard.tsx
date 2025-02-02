'use client'
import React, { useState } from 'react';
import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react'; // Example icons from Lucide
import { Bar } from 'react-chartjs-2'; // For bar chart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  // Sales Data for Monthly Overview (Div 2)
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // Example months
    datasets: [
      {
        label: 'Monthly Sales',
        data: [5000, 4000, 7000, 6000, 7500, 6500],  // Example sales data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="font-sans p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black mb-6">Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-8 mb-6">
        {['Overview', 'Analytics', 'Reports', 'Notification'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-semibold ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Div 1: Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <DollarSign className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-lg text-black">$45,231.89</p>
            <p className="text-sm text-green-600">+20.1% from last month</p>
          </div>
        </div>
        
        {/* Subscriptions */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <Users className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-xl font-semibold">Subscriptions</h3>
            <p className="text-lg text-black">+2350</p>
            <p className="text-sm text-blue-600">+180.1% from last month</p>
          </div>
        </div>

        {/* Sales */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <ShoppingCart className="w-8 h-8 text-yellow-600" />
          <div>
            <h3 className="text-xl font-semibold">Sales</h3>
            <p className="text-lg text-black">+12,234</p>
            <p className="text-sm text-yellow-600">+19% from last month</p>
          </div>
        </div>

        {/* Active Now */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <Activity className="w-8 h-8 text-red-600" />
          <div>
            <h3 className="text-xl font-semibold">Active Now</h3>
            <p className="text-lg text-black">+573</p>
            <p className="text-sm text-red-600">+201 since last hour</p>
          </div>
        </div>
      </div>

      {/* Div 2 and Div 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Div 2: Overview - Monthly Sales Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
        <Bar data={salesData} />
      </div>

{/* Div 3: Recent Sales */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Sales</h2>
  <div className="space-y-4">
    {/* Sale 1 */}
    <div className="flex justify-between items-center border-b py-2 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
          <span className="font-semibold">OM</span>
        </div>
        <span className="text-sm text-gray-600 ml-2">Olivia Martin</span>
      </div>
      <p className="text-green-500 font-semibold">+$1,999.00</p>
    </div>
    {/* Sale 2 */}
    <div className="flex justify-between items-center border-b py-2 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
          <span className="font-semibold">JL</span>
        </div>
        <span className="text-sm text-gray-600 ml-2">Jackson Lee</span>
      </div>
      <p className="text-green-500 font-semibold">+$39.00</p>
    </div>
    {/* Sale 3 */}
    <div className="flex justify-between items-center border-b py-2 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
          <span className="font-semibold">IN</span>
        </div>
        <span className="text-sm text-gray-600 ml-2">Isabella Nguyen</span>
      </div>
      <p className="text-green-500 font-semibold">+$299.00</p>
    </div>
    {/* Sale 4 */}
    <div className="flex justify-between items-center border-b py-2 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
          <span className="font-semibold">WK</span>
        </div>
        <span className="text-sm text-gray-600 ml-2">William Kim</span>
      </div>
      <p className="text-green-500 font-semibold">+$99.00</p>
    </div>
    {/* Sale 5 */}
    <div className="flex justify-between items-center py-2 hover:bg-gray-50 transition-colors duration-300">
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
          <span className="font-semibold">SD</span>
        </div>
        <span className="text-sm text-gray-600 ml-2">Sofia Davis</span>
      </div>
      <p className="text-green-500 font-semibold">+$39.00</p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Dashboard;

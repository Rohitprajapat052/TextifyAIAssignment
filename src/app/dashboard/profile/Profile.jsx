'use client';
import React, { useState } from 'react';
import Header from '@/app/components/header/Header';
import SideMenu from '@/app/components/side-menu/SideMenu';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideMenu className="w-64 bg-white shadow-md" />
        
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-auto flex justify-center items-center">
          <div className="w-full max-w-5xl p-12 bg-white rounded-2xl shadow-2xl flex space-x-12">
            {/* Profile Section */}
            <div className="w-1/2 flex flex-col items-center">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">User Profile</h1>
              </div>
              <div className="flex flex-col items-center mb-8">
                <img src="/profile.jpg" alt="Profile" className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6 transform transition duration-500 hover:scale-105 object-cover" />
                <p className="text-2xl font-semibold text-gray-900">Rohit Prajapat</p>
                <p className="text-md text-gray-600 mb-2">rohit@example.com</p>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-800">
                  <strong className="font-medium">Skills:</strong> Python, JavaScript, ReactJS, Node.js
                </p>
                <p className="text-lg text-gray-800">
                  <strong className="font-medium">Current Project:</strong> Frontend Development with ReactJS
                </p>
                <p className="text-lg text-gray-800">
                  <strong className="font-medium">About Me:</strong> Passionate about coding, technology, and innovation. Always eager to learn and grow.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Contact Me</h2>
              <form className="space-y-6">
                <div>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
                </div>
                <div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
                </div>
                <div>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

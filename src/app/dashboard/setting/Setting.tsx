'use client'
import React from "react";
import { User, Lock, Bell, Shield } from "lucide-react";
import Header from "@/app/components/header/Header";
import SideMenu from "@/app/components/side-menu/SideMenu";

const Setting = () => {
  // Dummy data for user settings
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className="flex flex-col h-screen">
    {/* Header */}
    <Header />
    
    <div className="flex flex-1">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
<SideMenu />
</div>

        {/* Settings Content */}
        <div className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

          {/* Profile Section */}
          <div className="bg-white p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
            <div className="flex items-center gap-4">
              <User className="w-12 h-12 text-gray-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <button className="mt-2 text-blue-600">Change Profile Picture</button>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
            <div className="flex items-center gap-4">
              <Lock className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Change Password</h3>
                <p className="text-gray-600">Update your password for better security.</p>
                <button className="mt-2 text-blue-600">Change Password</button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email Notifications</h3>
                <p className="text-gray-600">Enable or disable email notifications for different activities.</p>
                <div className="flex items-center gap-4 mt-2">
                  <button className="px-4 py-1 bg-green-600 text-white rounded-sm hover:bg-green-700">Enable</button>
                  <button className="px-4 py-1 bg-red-600 text-white rounded-sm hover:bg-red-700">Disable</button>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy Settings</h2>
            <div className="flex items-center gap-4">
              <Shield className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Data Privacy</h3>
                <p className="text-gray-600">Manage your privacy preferences for data sharing and visibility.</p>
                <button className="mt-2 text-blue-600">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

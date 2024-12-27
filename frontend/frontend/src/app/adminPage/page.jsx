
"use client";

import { IconAddressBook, IconComponents, IconDatabase, IconTool, IconUserFilled } from "@tabler/icons-react";
import Link from "next/link";
import Footer from "@/components/Footer_admin";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar_admin";

const Adminpage = () => {
  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Check for admin token on component mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    console.log("Token in localStorage:", token); // Debugging
    if (!token) {
      setShowPopup(true); // Show popup if token doesn't exist
      console.log("Popup should be visible now");
    }  else {
      console.log("Token exists. Popup will not be shown.");
    }
  }, []);
  
  

  // Function to handle login action
  const handleLogin = () => {
    console.log("Login button clicked");
    localStorage.setItem("adminToken", "yourGeneratedTokenHere");
    setShowPopup(false); // Close popup after login
  };

  // Function to handle logout action
  const handleLogout = () => {
    console.log("Logout button clicked");
    localStorage.removeItem("adminToken"); // Remove token from localStorage
    setShowPopup(true); // Show popup after logout
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar className="flex-shrink-0" />

      {/* Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Popup for Admin Login */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
              <h2 className="text-2xl font-bold mb-4">Welcome to Admin Portal</h2>
              <p className="text-gray-600 mb-6">Log in to continue.</p>
              <Link
              href="/login"
                onClick={handleLogin}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        )}

        {/* Sidebar */}
        <aside className="w-1/4 bg-slate-200 p-6 flex-shrink-0">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
          <ul className="space-y-6 text-lg">
            <li>
              <Link href="/user-data" className="hover:text-lime-600">
                <IconUserFilled /> User Data
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-lime-600">
                <IconTool /> Tool Form
              </Link>
            </li>
            <li>
              <Link href="/rent-data" className="hover:text-lime-600">
               <IconComponents/> Rental Request
              </Link>
            </li>
            <li>
              <Link href="/tool-data" className="hover:text-lime-600">
               <IconDatabase/> Tool Data
              </Link>
            </li>
            <li>
              <Link href="/contact-request" className="hover:text-lime-600">
                <IconAddressBook /> Contact Request
              </Link>
            </li>
          </ul>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-8 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
          >
            Logout
          </button>
        </aside>

        {/* Dashboard Content */}
        <main className="w-3/4 p-6 bg-white overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-lime-100 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Total Users</h2>
              <p className="text-2xl font-bold text-lime-600">50</p>
            </div>
            <div className="bg-lime-100 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Pending Requests</h2>
              <p className="text-2xl font-bold text-lime-600">24</p>
            </div>
            <div className="bg-lime-100 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">New Messages</h2>
              <p className="text-2xl font-bold text-lime-600">12</p>
            </div>
          </div>
            {/* Recent Activities Section */}
         <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
           <ul className="space-y-4">
             <li className="p-4 bg-gray-100 rounded-lg shadow-md">
               <p className="text-lg">
                 New  request received from <strong>RIYA SHARMA</strong>.
               </p>
               <span className="text-sm text-gray-500">2 hours ago</span>
             </li>
             <li className="p-4 bg-gray-100 rounded-lg shadow-md">
               <p className="text-lg">
                 User <strong>AMAN GUPTA </strong> updated profile.
               </p>
               <span className="text-sm text-gray-500">5 hours ago</span>
             </li>
           </ul>
         </div>

        {/* Graph Placeholder */}
         <div>
           <h2 className="text-2xl font-bold mb-4">Rental Trends</h2>
           <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
             <p className="text-gray-500">Chart Placeholder</p>
           </div>
           </div>
        </main>
      </div>

      {/* Footer */}
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default Adminpage;

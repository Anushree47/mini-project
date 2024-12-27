"use client";
import React, { useState } from "react";
import Link from "next/link";
import Slide from "@/components/Slide";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

  const benefits = [
    { title: "Cost Effective", description: "Save money by renting equipment at affordable rates." },
    { title: "Wide Variety", description: "Choose from a diverse range of farming machinery." },
    { title: "Quality Assured", description: "All equipment is inspected and maintained for reliability." },
    { title: "Easy Process", description: "Simple and fast booking process for your convenience." },
  ];

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h2 className="text-2xl font-bold mb-4">Welcome to AGRI Rental Hub</h2>
            <p className="text-gray-600 mb-6">Your trusted partner for agricultural equipment rental.</p>
            <button  onClick={() => setShowPopup(false)} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Image Slider */}
      <div>
    <div>
      <Slide/>
    </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Efficient Farming Starts Here</h1>
            <p className="text-lg mb-6">Rent Top-Quality Agricultural Equipment at Affordable Rates</p>
            <Link
              href="/viewEquipment"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition inline-block"
            >
              Browse Equipment
            </Link>
          </div>

          {/* Image */}
          <div className="mt-6 lg:mt-0 lg:w-1/2">
            <img
              src="/hero.jpg"
              alt="Agricultural Field"
              className="w-fit h-fit rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      </div>
      {/* Why Choose Us Section */}
      <section className="p-6 bg-gradient-to-r from-green-400 to-blue-500">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
